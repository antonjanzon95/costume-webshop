import { NextApiResponse, NextApiRequest } from "next";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "../../../lib/db";
import Product from "@/models/Product";

// interface ProductData {
//   id: string;
//   category: string;
//   name: string;
//   price: number;
//   // image: string;
//   description: string;
// }

// const products: Product[] = [
//   {
//     id: uuidv4(),
//     category: "royalty",
//     name: "Princess costume",
//     price: 299,
//     // image: string;
//     description: "Pink princess costume, ages 2-3",
//   },
//   {
//     id: uuidv4(),
//     category: "royalty",
//     name: "Prince costume",
//     price: 249,
//     // image: string;
//     description: "Blue prince costume, ages 1-2",
//   },
//   {
//     id: uuidv4(),
//     category: "superheroes",
//     name: "Superman costume",
//     price: 189,
//     // image: string;
//     description: "Superman costume, ages 4-6",
//   },
//   {
//     id: uuidv4(),
//     category: "superheroes",
//     name: "Batman costume",
//     price: 199,
//     // image: string;
//     description: "Batman costume, ages 3-5",
//   },
//   {
//     id: uuidv4(),
//     category: "animals",
//     name: "Dragon costume",
//     price: 399,
//     // image: string;
//     description: "Dragon costume, ages 4-6",
//   },
// ];

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const { method, query } = req;

//   if (method === "GET") {
//     if (query.category) {
//       const filteredProducts = products.filter(
//         (product) => product.category === query.category
//       );
//       console.log(products);
//       res.status(200).json(filteredProducts);
//     } else {
//       res.status(200).json(products);
//     }
//   } else {
//     res.setHeader("Allow", ["GET"]);
//     res.status(405).end(`Method ${method} not allowed.`);
//   }
// }

export const config = {
  api: {},
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method === "POST") {
    const { name, id, price, category, color, age } = req.body;

    if (!id || !name || !price || !category || !color || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      color,
      age,
      id,
      price,
      category,
    });

    try {
      const savedProduct = await newProduct.save();

      res.status(201).json(savedProduct);
    } catch (error) {
      console.error("Error saving product:", error);
      res
        .status(500)
        .json({ message: "An error occurred while saving the product" });
    }
  } else if (req.method === "GET") {
    const { category } = req.query;

    try {
      let products;

      if (category) {
        products = await Product.find({ category });

        if (products.length === 0) {
          return res
            .status(404)
            .json({ message: `No products of ${category} category.` });
        }
      } else {
        products = await Product.find({});
      }

      res.status(201).json(products);
    } catch (err) {
      console.error("error fetching products: ", err);
      res.status(500).json({ message: "error fetching products" });
    }
  } else {
    res.setHeader("Allow", ["POST", "GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
