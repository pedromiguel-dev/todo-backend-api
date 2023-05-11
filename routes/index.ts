import express, { Request, Response } from "express";
import taskRouter from "./task";
import path from "path";
import renderRouter from "./render";
const rootRouter = express.Router();

rootRouter.use("/", renderRouter);
rootRouter.use("^/api", taskRouter);

export default rootRouter;
