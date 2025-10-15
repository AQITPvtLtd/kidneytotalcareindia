import pool from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const [results] = await pool.query("SELECT * FROM treatments ORDER BY id");

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
