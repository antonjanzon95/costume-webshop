import { NextApiResponse, NextApiRequest } from "next";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "../../../lib/db";
import User from "@/models/Users";

export const config = {
  api: {},
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, email, password } = req.body;
    const id = uuidv4();

    if (!name || !email || !password) {
      res.status(400).json({ message: "All fields are required!" });
    }

    const newUser = new User({ id, name, email, password });

    try {
      const savedUser = newUser.save();

      res.status(201).json(savedUser);
    } catch (err) {
      console.error("error when saving user: ", err);
      res.status(500).json({ message: "Error when saving user." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
