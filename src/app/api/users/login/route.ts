import { connect } from "@/app/dbconfig/db"
import bcryptjs from "bcryptjs"
import User from "@/app/models/user.model"
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken"
connect();

export async function POST(req: NextRequest) {
    try {
        const reqBody = await req.json();
        const { email, password } = reqBody;
        console.log(email, password)
        //now check user is present or not
        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ error: "User not found", success: "false" })
        }
        //now check the password is correct or not
        const validpassword = await bcryptjs.compare(password, user.password);
        if (!validpassword) {
            return NextResponse.json({ error: "Invalid password", "success": "false" }, { status: 400 });
        }

        // generate the token
        // first we have to create the payload model of the joken
        const jwtData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = await jwt.sign(jwtData, "gargayush970", { expiresIn: "1d" });
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        });
        // httponly cookie client can't read or update
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;
    } catch (error) {
        return NextResponse.json({ message: "Error is occurred on the catch block" }, { status: 200 })
    }
}