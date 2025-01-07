import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
  description: string;
  createdAt?: Date;
}

const ProductSchema: Schema = new Schema<IProduct>({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
  },
  price: {
    type: Number,
    required: [true, 'Please provide a product price'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a product description'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', ProductSchema);

export default Product;
