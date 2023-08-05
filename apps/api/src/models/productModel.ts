import { ObjectId } from "mongodb";
import { Model, Schema, model } from "mongoose";
import mongoose from "mongoose";

interface IProduct {
  name: string;
  description: string;
  image: string;
  price: number;
  adminId: ObjectId;
}
interface IProductMethods {}

type ProductModel = Model<IProduct, {}, IProductMethods>;

const productSchema = new Schema<IProduct, ProductModel, IProductMethods>({
  name: {
    type: String,
    required: [true, "Product must have a name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Product must have a description"],
    trim: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "Product must have a price"],
  },
  adminId: {
    type: mongoose.Schema.ObjectId,
    ref: "Admin",
  },
});

const Product = model<IProduct, ProductModel>("Product", productSchema);

export default Product;
