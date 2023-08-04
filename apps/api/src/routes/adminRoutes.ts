import { signup, signin, protect } from "./../controllers/adminAuthController";
import { getProducts } from "../controllers/adminController";
import express from "express";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);

router.route("/home").get(protect, getProducts);

export default router;
