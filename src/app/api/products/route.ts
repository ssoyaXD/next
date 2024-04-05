import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

// request 타입은 Request
export async function GET(request: Request) {
    const products = await getProducts();
    return NextResponse.json({products});
}

