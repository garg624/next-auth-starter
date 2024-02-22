import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbconfig/db";
import User from "@/app/models/user.model";

connect();

export async function POST(req:NextRequest,{params}:{params:any}){
    return NextResponse.json({success:true})
}