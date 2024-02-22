import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user.model";
import { connect } from "@/app/dbconfig/db"

connect();

export async function POST(req:NextRequest){
    try {
        const reqBody=await req.json();
        const {token}=reqBody;
        // console.log(token)
        // console.log(reqBody.token);
        // console.log(decode)
        
        const user=await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt:Date.now()}})
        // console.log(user)
        if(!user){
            return NextResponse.json({message:"The token is invalid",sucess:false},{status:500})
        }
        user.isVerfied="true"
        user.verifyToken=undefined
        user.verifyTokenExpiry=undefined
        const finalsave=await user.save()
        // console.log(finalsave);
        return NextResponse.json({message:"The token is valid",sucess:true},{status:201})
        
    } catch (error) {
        return NextResponse.json({message:"Some error occurred",sucess:false},{status:500})
    }
}