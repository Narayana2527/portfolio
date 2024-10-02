import nodemailer from 'nodemailer';
import {NextResponse} from 'next/server'
interface ContactForm{
    name:string,
    email:string,
    message:string
}
export  async function POST(request:Request): Promise<NextResponse> {
    const {name,email,message}: ContactForm = await request.json();
    const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:"avulanarayana.2016@gmail.com",
            pass:"msjtvkxpyryzlkyv"
        }
    });
    const mailOptions = {
        from:"email",
        to:"avulanarayana.2016@gmail.com",
        subject:`New Contact Form Submission from ${name}`,
        text:`You hane a new message from your portfolio website:
        Name:${name}
        Email:${email}
        Message:${message}`
    }
    try{
        await transporter.sendMail(mailOptions);
        return NextResponse.json({status:true, message:"Message sent successfully"})
    }catch(error){
        console.error('Error sending email',error)
        return NextResponse.json({status:false, message:"Message failed to sent"},{status:500})
    }
}