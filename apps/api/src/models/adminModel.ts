// import mongoose from "mongoose";
import mongoose, { Model, Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import { ObjectId } from "mongodb";

interface IAdmin {
  name: string;
  email: string;
  password: string | undefined;
  passwordConfirm: string | undefined;
  // products: [ObjectId];
}

interface IAdminMethods {
  correctPassword(password1: string, password2: string): boolean;
}

type AdminModel = Model<IAdmin, {}, IAdminMethods>;

const adminSchema = new Schema<IAdmin, AdminModel, IAdminMethods>({
  name: {
    type: String,
    required: [true, "admin must have a name"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "confirm your password"],
  },
  // products: [{ type: mongoose.Schema.ObjectId, ref: "Product" }],
});

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  if (this.password === undefined) return next();
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

// this method is an instance method so it is available in all Admin documents
adminSchema.method(
  "correctPassword",
  async function (candidatePassword: string, userPassword: string) {
    return await bcrypt.compare(candidatePassword, userPassword);
  }
);

const Admin = model<IAdmin, AdminModel>("Admin", adminSchema);

export default Admin;
