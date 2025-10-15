import pool from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET() {
    return new Promise((resolve) => {
        pool.query("SELECT * FROM treatments ORDER BY id", (error, results) => {
            if (error) {
                console.log("Database Error:", error.message);
                return resolve(
                    NextResponse.json({
                        message: error.message,
                        success: false,
                    })
                );
            }

            resolve(
                NextResponse.json({
                    message: "success",
                    success: true,
                    result: results,
                })
            );
        });
    });
}
