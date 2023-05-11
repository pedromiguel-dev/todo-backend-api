import express, { Request, Response } from "express";
import prisma from "../../prisma/client";
import updateTitle from "../../controller/taskController";
import taskController from "../../controller/taskController";
const taskRouter = express.Router();

taskRouter.get("^/$", (req: Request, res: Response) => {
  res.send("Teste de atrefas");
});
taskRouter.post("^/create$", taskController.createTasks);
taskRouter.get("^/find/:id", taskController.findTasks);
taskRouter.patch("^/edit/:id", taskController.updateTasks);
taskRouter.patch("^/done/:id", taskController.markDoneTasks);
taskRouter.delete("^/delete/:id", taskController.deleteTasks);

export default taskRouter;
