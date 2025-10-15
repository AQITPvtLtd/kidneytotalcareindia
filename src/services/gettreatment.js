// import { httpAxios } from "@/helper/httpHelper";

// export async function getTreatment() {
//     try {
//         const response = await httpAxios.get("/api/");
//         return response.data;
//     } catch (error) {
//         console.log(error.message)
//         throw error;
//     }
// }


// import { httpAxios } from "../helper/httpHelper";

// export async function getTreatment() {
//     const result = await httpAxios
//         .get("/api/treatments")
//         .then((response) => response.data);
//     return result;
// } 



export async function getTreatment() {
    try {
        // Detect base URL depending on environment
        const baseURL =
            process.env.NEXT_PUBLIC_SITE_URL ||
            (process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}`
                : "http://localhost:3000");

        const res = await fetch(`${baseURL}/api/treatments`, {
            cache: "no-store", // ensures fresh data
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch treatments: ${res.status}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("❌ Error in getTreatment:", error.message);
        return { success: false, result: [] };
    }
}
