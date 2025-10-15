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


import { httpAxios } from "../helper/httpHelper";

export async function getTreatment() {
    const result = await httpAxios
        .get("/api/treatments")
        .then((response) => response.data);
    return result;
} 