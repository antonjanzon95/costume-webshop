import { NextApiResponse, NextApiRequest } from "next";

interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  amount: number;
  // image: string;
  description: string;
}

const cart: Product[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const { method, body } = req;

  if (method === "GET") {
    res.status(200).json(cart);
  } else if (method === "POST") {
    const { product } = body || {};
    const { name, price, id, description, category } = product || {};
    const productToAdd: Product = {
      name: name,
      price: price,
      id: id,
      description: description,
      category: category,
      amount: 1,
    };
    const productExist = cart.find((product) => product.id === productToAdd.id);
    const productIndex = cart.findIndex(
      (product) => product.id === productToAdd.id
    );
    if (productExist) {
      cart[productIndex].amount += 1;
    } else {
      cart.push(productToAdd);
    }
    res.status(200).json(cart);
  } else if (method === "PUT") {
    const { productId } = body || {};
    const cartProduct = cart.find((product) => product.id === productId);
    const indexProduct = cart.findIndex((product) => product.id === productId);
    if (cartProduct != null) {
      if (cartProduct.amount > 1) {
        cartProduct.amount -= 1;
      } else {
        cart.splice(indexProduct, 1);
      }
      res.status(200).json(cart);
    } else {
      res.status(409).end("Product doesn't exist in cart.");
    }
  } else {
    res.status(405).end(`Method ${method} not allowed.`);
  }
}
