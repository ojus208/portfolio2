import clientPromise from "@/db/database";

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(req, res ) {
  // Do whatever you want

  try {
    const client = await clientPromise;
    const db = client.db("portfolio_data");
    const allPosts = await db.collection("projects").find({}).toArray();
    return NextResponse.json({allPosts });
  } catch (error) {
      return NextResponse.json({error:error})
  }
  
}