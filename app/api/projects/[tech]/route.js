import clientPromise from "@/db/database";

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(req,{params} ) {
  // Do whatever you want
  var tech = params.tech

  try {
    const client = await clientPromise;
    const db = client.db("portfolio_data");
    const allPosts = await db.collection("projects").find({"techstack.name":tech}).toArray();
    return NextResponse.json({allPosts });
  } catch (error) {
      return NextResponse.json({error:error})
  }
  
}