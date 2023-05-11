import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/client";

const findTasks = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.render("item", {
      task: task,
    });
  } catch (error) {
    console.log(error);
  }
};
const createTasks = async (req: Request, res: Response) => {
  try {
    await prisma.task.create({
      data: {
        title: req.body.title,
        content: req.body.title,
      },
    });
    res.render("list-item", {
      tasks: await prisma.task.findMany(),
    });
  } catch (error) {
    console.log(error);
  }
};

const updateTasks = async (req: Request, res: Response) => {
  try {
    await prisma.task.update({
      data: {
        title: req.body.title,
      },
      where: {
        id: req.params.id,
      },
    });
    res.render("list-item", {
      tasks: await prisma.task.findMany(),
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteTasks = async (req: Request, res: Response) => {
  try {
    await prisma.task.delete({
      where: {
        id: req.params.id,
      },
    });
    res.render("list-item", {
      tasks: await prisma.task.findMany(),
    });
  } catch (error) {
    console.log(error);
  }
};
const markDoneTasks = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: req.params.id,
      },
    });
    await prisma.task.update({
      data: {
        completed: !task?.completed,
      },
      where: {
        id: req.params.id,
      },
    });
    res.render("list-item", {
      tasks: await prisma.task.findMany(),
    });
  } catch (error) {
    console.log(error);
  }
};

const renderController = {
  createTasks,
  updateTasks,
  deleteTasks,
  findTasks,
  markDoneTasks,
};
export default renderController;
