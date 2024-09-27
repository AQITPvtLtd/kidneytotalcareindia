import connection from "@/helper/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const { name, phone, email, message } = await request.json();
    const unique_id = uuid();
    {
      console.log({ unique_id, name, phone, email, message });
    }
    await new Promise((resolve, reject) => {
      connection.query(
        "INSERT INTO contact(id, name, phone, email, message) VALUES (?,?,?,?,?)",
        [unique_id, name, phone, email, message],
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

    // const mailOptions = {
    //   from: process.env.MY_EMAIL,
    //   to: process.env.MY_EMAIL,

    //   html: `<html lang="en">
    //     <head>
    //       <meta charset="utf-8">
  
    //       <title>Kidney Total Care India</title>
    //       <meta name="description" content="Kidney Total Care India">
    //       <meta name="author" content="SitePoint">
    //       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  
    //       <link rel="stylesheet" href="css/styles.css?v=1.0">
  
    //     </head>
  
    //     <body>
    //       <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';"></div>
    //             <div class="container" style="margin-left: 20px;margin-right: 20px;">
    //             <h3>You've got a new mail from ${name}, their email is: ✉️${email} And Phone Number is: ${phone} </h3>
    //             <div style="font-size: 16px; font:bold">
               
    //             <p>Query:</p>
    //             <p>${message}</p>
                
    //             <br>
    //             </div>
    //             </div>
    //     </body>
    //     </html>`,
    // };

    // transporter.sendMail(mailOptions);

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
