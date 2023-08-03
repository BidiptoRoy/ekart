import { signup } from "./../controllers/adminAuthController";
import express from "express";

const router = express.Router();

router.route("/signup").post(signup);

export default router;
