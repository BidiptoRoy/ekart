import { NextFunction, Request, Response } from "express";
import Admin from "../models/adminModel";
import { z } from "zod";
import { Document, ObjectId } from "mongodb";
import { JwtPayload, decode } from "jsonwebtoken";
const jwt = require("jsonwebtoken");
import AppError from "../utils/appError";
import { catchAsync } from "../utils/catchAsync";

let signUpInput = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords don't match",
  });

let signInInput = z.object({
  email: z.string().email(),
  password: z.string().max(20),
});

const createAndSendToken = function (
  admin: Document,
  statusCode: number,
  res: Response
) {
  const secret = process.env.JWT_SECRET || "secret";
  const token = jwt.sign({ id: admin._id }, secret, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  admin.password = undefined;
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      admin,
    },
  });
};

export const signup = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const parsedInput = signUpInput.safeParse(req.body);
    if (!parsedInput.success) {
      res.status(400).json({
        status: "Failed",
        message: "Provide correct input",
      });
      return;
    }
    const admin = await Admin.create(req.body);
    createAndSendToken(admin, 201, res);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: "Invalid login details",
    });
  }
};

export const signin = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const parsedInput = signInInput.safeParse(req.body);
    if (!parsedInput.success) {
      res.status(400).json({
        status: "Failed",
        message: "provide correct input",
      });
      return;
    }
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email: email }).select("+password");
    const correct =
      admin && admin.password
        ? await admin.correctPassword(password, admin.password)
        : undefined;

    if (!correct || !admin) {
      res.status(401).json({
        status: "fail",
        message: "Incorrect email or password",
      });
      return;
    }
    createAndSendToken(admin, 201, res);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: "Invalid login details",
    });
  }
};

export const protect = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  let token: string = "";
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (token === "") {
    return next(new AppError("You are not logged in, please login", 401));
  }
  let decoded: any;
  try {
    const secret = process.env.JWT_SECRET || "secret";
    decoded = jwt.verify(token, secret);
  } catch (err: any) {
    if (err.name === "JsonWebTokenError")
      return next(new AppError("Invalid token, please login again!", 401));
    if (err.name === "TokenExpiredError")
      return next(
        new AppError("Your session has expired, please login again!", 401)
      );
    return next(new AppError("Invalid token, please login again!", 401));
  }
  // 3) check if the user still exits

  const currentUser = await Admin.findById(decoded.id);
  if (!currentUser)
    return next(
      new AppError("The user belonging to the token no longer exits", 401)
    );
  // console.log(currentUser.id)
  req.headers["userId"] = currentUser.id;
  next();
});
