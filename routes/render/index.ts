import express, { Request, Response } from "express";
import path from "path";
import prisma from "../../prisma/client";
import renderController from "../../controller/renderController";
const renderRouter = express.Router();

renderRouter.get("^/$", async (req: Request, res: Response) => {
  res.render("index", {
    tasks: await prisma.task.findMany(),
  });
});
renderRouter.post("^/create$", renderController.createTasks);
renderRouter.get("^/find/:id", renderController.findTasks);
renderRouter.patch("^/edit/:id", renderController.updateTasks);
renderRouter.patch("^/done/:id", renderController.markDoneTasks);
renderRouter.delete("^/delete/:id", renderController.deleteTasks);
export default renderRouter;
