import connection from "@/helper/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
export async function POST(request) {
  try {

    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const location = formData.get("location");
    const message = formData.get("message");
    const MedicalReport = formData.get("MedicalReport");
    // const { name, phone, email, location, message } = await request.json();
    const unique_id = uuid();
    await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO contact(id, date, name, phone, email, location ,message) VALUES (?,NOW() ,?,?,?,?,?)",
        [unique_id, name, phone, email, location, message],
        (err, results, fields) => {
          if (err) {
            console.error(err);
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "Kidney Total care India",
      html: `<html>
              <body>
                <h3>You've got a new mail from ${name}, their email is: ✉️${email} And phone Number is ${phone} </h3>
                <p>Message:</p>
                <p>${message}</p>
              </body>
             </html>`,
      attachments: MedicalReport ? [{
        filename: MedicalReport.name,
        content: Buffer.from(await MedicalReport.arrayBuffer()),
      }] : [],
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: email,
      subject: "Thank You for contacting Kidney Total care India!",
      html: `<html>
              <body>
                <h2>Hey ${name}!</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
    });

    // Return success response

    return NextResponse.json({
      message: "Message Sent",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to send query",
      success: false,
    });
  }
}
