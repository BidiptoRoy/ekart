import { json, urlencoded } from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import adminRouter from "./routes/adminRoutes";

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/admin", adminRouter);

export default app;
