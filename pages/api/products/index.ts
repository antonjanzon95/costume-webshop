import { NextApiResponse, NextApiRequest } from "next";

interface Product {
  id: number;
  category: string;
  name: string;
  price: number;
  // image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    category: "royalty",
    name: "Princess costume",
    price: 299,
    // image: string;
    description: "Pink princess costume, ages 2-3",
  },
  {
    id: 2,
    category: "royalty",
    name: "Prince costume",
    price: 249,
    // image: string;
    description: "Blue prince costume, ages 1-2",
  },
  {
    id: 3,
    category: "superheroes",
    name: "Superman costume",
    price: 189,
    // image: string;
    description: "Superman costume, ages 4-6",
  },
  {
    id: 4,
    category: "superheroes",
    name: "Batman costume",
    price: 199,
    // image: string;
    description: "Batman costume, ages 3-5",
  },
  {
    id: 5,
    category: "animals",
    name: "Dragon costume",
    price: 399,
    // image: string;
    description: "Dragon costume, ages 4-6",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, query } = req;

  if (method === "GET") {
    if (query.category) {
      const filteredProducts = products.filter(
        (product) => product.category === query.category
      );
      console.log(products);
      res.status(200).json(filteredProducts);
    } else {
      res.status(200).json(products);
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${method} not allowed.`);
  }
}
