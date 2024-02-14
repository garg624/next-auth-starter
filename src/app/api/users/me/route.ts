//this 
import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user.model";
import { connect } from "@/app/dbconfig/db"
import { getTokenData } from "@/app/helpers/getTokenData";



connect();

export async function GET(req:NextRequest){
    try {
        const userId=await getTokenData(req);
        const userData=await User.findOne({_id: userId}).select("-password")
        return NextResponse.json({
            message:"The user data",
            data:userData
        })
    } catch (error:any) {
        return NextResponse.json({
            error: error.message,
        },{status:400});
    }
}