// src/app/api/products/route.ts

import { NextResponse } from 'next/server';
import dbConnect from '../../../../lib/dbConnect';
import Product from '../../../../lib/models/Product';

export async function GET() {
  await dbConnect();
  
  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error: any) {
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}


// src/app/api/products/route.ts

export async function POST(request: Request) {
    await dbConnect();
  
    try {
      const body = await request.json();
      const product = await Product.create(body);
      return NextResponse.json({ success: true, data: product }, { status: 201 });
    } catch (error: any) {
      return NextResponse.json({ success: false, message: error.message }, { status: 400 });
    }
  }
  