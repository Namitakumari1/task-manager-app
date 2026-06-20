import Task from "../models/Task.js";

export const createTask = async (req, res) => {
  try {
    const { title, description, priority } = req.body;

    const task = await Task.create({
      title,
      description,
      priority,
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};