import type { Request, Response } from "express";
import * as userService from "../services/user.service.js";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAllUsers(); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
};

export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await userService.createUser({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error });
  }
};
