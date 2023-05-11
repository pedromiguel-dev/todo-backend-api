import { NextFunction, Request, Response } from "express";
import prisma from "../prisma/client";

const findTasks = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};
const createTasks = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.create({
      data: {
        title: req.body.title,
        content: req.body.title,
      },
    });
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

const updateTasks = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.update({
      data: {
        title: req.body.title,
      },
      where: {
        id: req.params.id,
      },
    });
    res.json(task);
  } catch (error) {
    console.log(error);
  }
};

const deleteTasks = async (req: Request, res: Response) => {
  try {
    const task = await prisma.task.delete({
      where: {
        id: req.params.id,
      },
    });
    res.json(task);
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
    const taskUpdated = await prisma.task.update({
      data: {
        completed: !task?.completed,
      },
      where: {
        id: req.params.id,
      },
    });
    res.json(taskUpdated);
  } catch (error) {
    console.log(error);
  }
};

const taskController = {
  createTasks,
  updateTasks,
  deleteTasks,
  findTasks,
  markDoneTasks,
};
export default taskController;
