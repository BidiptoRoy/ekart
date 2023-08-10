import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { string, z } from "zod";
import AppError from "../utils/appError";
import Product from "../models/productModel";
import mongoose from "mongoose";

const productInput = z.object({
  name: z.string().min(3),
  description: z.string().min(20),
  image: z.string().optional(),
  price: z.number().min(1),
});
const updateProductInput = z.object({
  name: z.string().min(3).optional(),
  description: z.string().min(20).optional(),
  image: z.string().optional(),
  price: z.number().min(1).optional(),
});

export const getProducts = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const adminId = req.headers.userId;
  const products = await Product.find({ adminId: adminId });
  res.status(200).json({
    status: "Success",
    data: products,
  });
});

export const createProduct = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const parsedInput = productInput.safeParse(req.body);
  if (!parsedInput.success) {
    return next(new AppError("Give proper product details", 401));
  }
  const adminId = req.headers.userId;
  const product = await Product.create({
    ...req.body,
    adminId: adminId,
  });
  res.status(201).json({
    status: "Success",
    data: product,
  });
});

export const getProduct = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const product = await Product.findById(req.params.productId);
  if (!product || !req.headers.userId)
    return next(new AppError("No product found with the given id", 401));

  if (product.adminId.toString() !== req.headers.userId.toString())
    return next(
      new AppError("You do not have permission to access this product", 401)
    );
  res.status(201).json({
    status: "Success",
    data: product,
  });
});

export const updateProduct = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const parsedInput = updateProductInput.safeParse(req.body);
  if (!parsedInput.success)
    return next(new AppError("Provide correct Input", 401));

  const product = await Product.findById(req.params.productId);
  if (!product || !req.headers.userId)
    return next(new AppError("No product found with the given id", 401));

  if (product.adminId.toString() !== req.headers.userId.toString())
    return next(
      new AppError("You do not have permission to access this product", 401)
    );

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.productId,
    req.body,
    { new: true, runValidators: true }
  );
  res.status(201).json({
    status: "Success",
    data: updatedProduct,
  });
});

export const deleteProduct = catchAsync(async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  const product = await Product.findById(req.params.productId);
  if (!product || !req.headers.userId)
    return next(new AppError("No product found with the given id", 401));

  if (product.adminId.toString() !== req.headers.userId.toString())
    return next(
      new AppError("You do not have permission to access this product", 401)
    );
  await Product.findByIdAndDelete(req.params.productId);
  res.status(201).json({
    status: "Success",
  });
});
