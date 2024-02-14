import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getTokenData=(req:NextRequest) => {
    try {
        const token=req.cookies.get("token")?.value || '';
        const decodeToken:any=jwt.verify(token,"gargayush970");
        return decodeToken.id;
        
    } catch (error:any) {
        throw new Error(error.message);
    }
}