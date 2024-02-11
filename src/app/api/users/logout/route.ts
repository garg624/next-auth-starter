import { NextResponse } from "next/server";

export async function GET() {
    try {
        // we have to delete the token from the cookie that we have set in the login block
        const response = NextResponse.json({
            message: "Logout Successfully",
            succes: true
        })

        response.cookies.set("token", "", {
            httpOnly: true, expires: new Date(0)
        })

        return response;
    } catch (error) {
        return NextResponse.json({
            message: "Error is occurred on the catch block",
            sucess: false
        }, { status: 200 })

    }
}