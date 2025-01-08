import { NextResponse } from "next/server";
import DBconnect from "../../../../lib/db"; // Ensure the import path is correct
import Product from "../../../../lib/models/Product"; // Ensure Product model is defined properly

export async function GET() {
  try {
    await DBconnect(); // Connect to MongoDB
    const products = await Product.find(); // Fetch all products
    return NextResponse.json({ success: true, data: products });
  } catch (error: unknown) {
    console.error("Error in GET:", error);
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? (error as Error).message
        : "An unknown error occurred";

    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
export const POST = async (req: Request) => {
  try {
    const body = await req.json(); // Parse request body
    await DBconnect(); // Connect to the database
    const newProduct = new Product(body); // Create a new Product instance
    await newProduct.save(); // Save the Product to the database

    return new NextResponse(
      JSON.stringify({ message: "Product Created!", Product: newProduct })
    );
  } catch (error: any) {
    return new NextResponse(
      "ERROR in creating Product: " + error.message, 
      { status: 500 }
    );
  }
};
