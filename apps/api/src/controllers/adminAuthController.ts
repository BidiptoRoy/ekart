import { NextFunction, Request, Response } from "express";
import Admin from "../models/adminModel";
import { z } from "zod";

let signUpInput = z
  .object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
  });

export const signup = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const admin = await Admin.create(req.body);
    res.status(201).json({
      status: "Success",
      message: "New Admin has been created",
      data: {
        admin,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

export const signin = async function (
  req: Request,
  res: Response,
  next: NextFunction
) {};
