import {connect} from "@/app/dbconfig/db"
import bcryptjs from "bcryptjs"
import User from "@/app/models/user.model"
import { NextResponse,NextRequest } from "next/server";
import { sendEmail } from "@/app/helpers/mailer";

connect();

export async function POST(req:NextRequest){
    try {
        const reqBody=await req.json();
        const {username,email,password} = reqBody
        console.log(username,email,password)
        if(!username ||!email ||!password){
            return NextResponse.json({error: "Please fill all the fields", success: "false"})
        }
        // now check if the user is a user already
        const user=await User.findOne({email})
        if(user){
            return NextResponse.json({error: "User already exists", success: "false"})
        }
        // now create the user
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword=await bcryptjs.hash(password,salt)
        const newUser=new User({
            username,
            email,
            password:hashedPassword
        })
        const savedUser=await newUser.save()
        await sendEmail({email:savedUser.email,emailType:"VERIFY",userId:savedUser._id});
        console.log(savedUser)
        return NextResponse.json({success: "true"})
    } catch (error) {
        return NextResponse.json({success: false,message:error},{status: 200})
    }
}