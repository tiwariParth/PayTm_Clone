import { NextResponse } from "next/server";
import { PrismaClient } from "@repo/db/client";

const client = new PrismaClient();

export const GET = async()=>{
    await client.user.create({
        data:{
            email:"asdf",
            name:"asdf",
            password:"asdf"

        }
    })
    return NextResponse.json({message:"Hello"})
}
