import  bcryptjs  from 'bcryptjs';
import nodemailer from "nodemailer"
import User from '../models/user.model';
interface sendEmail{
    email: string;
    emailType: string;
    userId:string
}
export const sendEmail=async({email,emailType,userId}:sendEmail) =>{
    const secretKey="jfbfkwgberogiweieugiuewrguiebg3553453"
    try {
        //first create a hashed token 
        const hashedToken = await bcryptjs.hash(userId.toString()+secretKey,10);
        //now strore the hashed token in the database
       
        if(emailType === "VERIFY"){
            await User.findByIdAndUpdate(userId,{
                verifyToken:hashedToken,
                verifyTokenExpiry:Date.now()+3600000,
            })
        }
        else if(emailType === "RESET"){
            await User.findByIdAndUpdate(userId,{
                forgotPasswordToken:hashedToken,
                forgotPasswordTokenExpiry:Date.now()+3600000,
            })
        }
        //now send the email
        // var transport = nodemailer.createTransport({
        //     host: "sandbox.smtp.mailtrap.io",
        //     port: 2525,
        //     auth: {
        //       user: process.env.MAILER_USER,
        //       pass: process.env.MAILER_PASSEWORD
        //     }
        //   });
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: "4e3f5d5ee01f1a",
              pass: "2323e34d635609"
            }
          });
        const mailOption={
            from:"gargayush970@gmail.com",
            to:email,
            subject:emailType==="VERIFY"? "Verify your email":"Reset your password",
            html:`<h1>Hello ${email}</h1>
            <p>Please click on the link below to verify your email</p>
            <a href="http://localhost:3000/verifyemail/${hashedToken}">Verify</a>
            <p>If you did not make this request, please ignore this email</p>
            <p>Regards,</p>`
        }
        const mailresponse=await transport.sendMail(mailOption);
        return mailresponse;
    } catch (error:any) {
       throw new Error(error.message)
       
    }
};

