import { Request, Response, NextFunction, RequestHandler } from "express";
import { format } from "date-fns";
import { v4 as uuid } from "uuid";

import fs from "fs";
import path from "path";
import fsPromisses from "fs/promises";
// const fsPromisses = require("fs").promises;

const loggerController = async (message: string, filename: string) => {
  const dateTime = `${format(new Date(), "ddMMyyyy:HH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) await fsPromisses.mkdir(path.join(__dirname, "..", "logs"));
    await fsPromisses.appendFile(path.join(__dirname, "..", "logs", filename), logItem);
  } catch (error) {
    console.log(error);
  }
};

const originLoggerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  loggerController(`${req.method}\t${req.headers.origin}\t${req.url}`, "logRequests.txt");
  next();
};

const logControllers = { loggerController, originLoggerMiddleware };

export default logControllers;
