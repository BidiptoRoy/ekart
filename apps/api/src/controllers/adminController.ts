import { NextFunction, Request, Response } from "express";

export const getProducts = function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(req.headers.userId);
  res.status(201).json({
    status: "Success",
    message: "Route not yet implemented",
  });
};
