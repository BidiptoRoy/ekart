import { signup, signin, protect } from "./../controllers/adminAuthController";
import {
  createProduct,
  getProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} from "../controllers/adminController";
import express from "express";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);

router.route("/home").get(protect, getProducts);
router.route("/home/product").post(protect, createProduct);

router
  .route("/home/product/:productId")
  .get(protect, getProduct)
  .patch(protect, updateProduct)
  .delete(protect, deleteProduct);

export default router;
