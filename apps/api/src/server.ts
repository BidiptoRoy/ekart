import { json, urlencoded } from "body-parser";
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
import adminRouter from "./routes/adminRoutes";

const app = express();
app.use(morgan("dev"));

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/admin", adminRouter);

export default app;
