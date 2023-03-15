import { NextApiResponse, NextApiRequest, NextApiHandler } from "next";
import { v4 as uuidv4 } from "uuid";
import dbConnect from "../../../lib/db";
import Product from "@/models/Product";

interface ProductData {
  id: string;
  category: string;
  name: string;
  price: number;
  // image: string;
  description: string;
}

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

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   // Connect to the database
//   await dbConnect();

//   if (req.method === "POST") {
//     const { name, description, id, price, category } = JSON.parse(req.body);

//     // Check if all required fields are provided
//     if (!id || !name || !description || !price || !category) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newProduct = new Product({
//       name,
//       description,
//       id,
//       price,
//       category,
//     });

//     try {
//       // Save the new Product to the database
//       const savedProduct = await newProduct.save();

//       // Return the saved Product as a JSON response
//       res.status(201).json(savedProduct);
//     } catch (error) {
//       console.error("Error saving product:", error);
//       res
//         .status(500)
//         .json({ message: "An error occurred while saving the product" });
//     }
//   }
//   // else if (req.method === "GET") {
//   //   res.status(200).json(pr)
//   // }
//   else {
//     // Handle other request methods
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Connect to the database
  await dbConnect();

  if (req.method === "POST") {
    const { name, description, id, price, category } = req.body as ProductData;

    // Check if all required fields are provided
    if (!id || !name || !description || !price || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newProduct = new Product({
      name,
      description,
      id,
      price,
      category,
    });

    console.log("Creating a new product:", newProduct);

    // Save the new Product to the database
    try {
      const savedProduct = await newProduct.save();
      console.log("Product saved:", savedProduct);
      // Return the saved Product as a JSON response
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error("Error saving the product:", error);
      res.status(500).json({ message: "Error saving the product" });
    }
  } else {
    // Handle other request methods
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
