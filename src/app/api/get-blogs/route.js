import { NextResponse } from "next/server";
import pool from "../../../helper/db";

export async function GET() {
  try {
    const results = await new Promise((resolve, reject) => {
      pool.query("SELECT * FROM blog ORDER BY id DESC", (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });

    return NextResponse.json({
      message: "success",
      success: true,
      result: results,
    });

  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    return NextResponse.json({ message: error.message, success: false });
  }
}
