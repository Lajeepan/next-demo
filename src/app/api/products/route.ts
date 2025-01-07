import { NextApiRequest, NextApiResponse } from 'next';
import Product from '../../../../lib/models/Product'; // Import the Product model

// Product API Routes
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  // Create new product
  if (method === 'POST') {
    try {
      const { name, price, description } = req.body;
      const newProduct = new Product({ name, price, description });
      await newProduct.save();
      return res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  }

  // Get all products
  if (method === 'GET') {
    try {
      const products = await Product.find();
      if (!products.length) {
        return res.status(404).json({ message: 'No products found' });
      }
      return res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      return res.status(500).json({ message: 'Server error' });
    }
  }

  // Handle unsupported methods
  res.status(405).json({ message: 'Method Not Allowed' });
}
