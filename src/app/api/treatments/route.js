import pool from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const results = await new Promise((resolve, reject) => {
            pool.query("SELECT * FROM treatments ORDER BY id DESC", (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        })
        return NextResponse.json({
            message: "success",
            success: true,
            result: results,
        });

    } catch (error) {
        console.error("Database Error:", error.message);
        return NextResponse.json({
            message: error.message,
            success: false,
        });
    }
}
