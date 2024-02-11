import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export const GET = async(request:NextRequest)=>{
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(JSON.stringify(categories), {status:500})

    } catch (error) {
        console.log(error)
        return new NextResponse(JSON.stringify({message:"Something went wrong"}), {status:500})
    }
}