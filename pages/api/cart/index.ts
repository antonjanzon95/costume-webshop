import { NextApiResponse, NextApiRequest } from "next";
import { v4 as uuidv4 } from "uuid";

interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  amount: number;
  // image: string;
  description: string;
}

export const cart: Product[] = [
  {
    id: uuidv4(),
    category: "royalty",
    name: "Princess costume",
    price: 299,
    amount: 1,
    // image: string;
    description: "Pink princess costume, ages 2-3",
  },
  {
    id: uuidv4(),
    category: "superheroes",
    name: "Batman costume",
    price: 199,
    amount: 1,
    // image: string;
    description: "Batman costume, ages 3-5",
  },
  {
    id: uuidv4(),
    category: "animals",
    name: "Dragon costume",
    price: 399,
    amount: 1,
    // image: string;
    description: "Dragon costume, ages 4-6",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method === "GET") {
    res.status(200).json(cart);
  } else if (method === "POST") {
    const { name, price, id, description, category } = body;
    const productToAdd: Product = {
      name: name,
      price: price,
      id: id,
      description: description,
      category: category,
      amount: 1,
    };
    const productExist = cart.find((product) => product.id === productToAdd.id);
    if (productExist) {
      productExist.amount += 1;
    } else {
      cart.push(productToAdd);
    }
    res.status(200).json(cart);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} not allowed.`);
  }
}
