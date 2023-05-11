import { Request, Response, NextFunction } from "express";
import logControllers from "./logControllers";

const errorLogger = (err: any, req: Request, res: Response, next: NextFunction) => {
  logControllers.loggerController(`${err.name}: ${err.message}`, "errorLog.txt");
  console.log(err.stack);
  res.status(500).send(err.message);
};
export default errorLogger;
