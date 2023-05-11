import express, { Request, Response } from "express";
import logControllers from "./middlewares/logControllers";
import errorLogger from "./middlewares/errorLogger";
import rootRouter from "./routes";
import cors from "cors";
import renderRouter from "./routes/render";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 8081;

app.use(logControllers.originLoggerMiddleware);
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("^/", rootRouter);

app.use("/*", (req: Request, res: Response) => {
  res.send("Erro 404");
});

app.use(errorLogger);

app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`);
});
