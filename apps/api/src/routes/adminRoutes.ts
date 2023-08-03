import { signup, signin } from "./../controllers/adminAuthController";
import express from "express";

const router = express.Router();

router.route("/signup").post(signup);
router.route("/signin").post(signin);

export default router;
