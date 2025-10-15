import { httpAxios } from "@/helper/httpHelper";

export async function getTreatment() {
    try {
        const response = await httpAxios.get("/api/treatments");
        return response.data;
    } catch (error) {
        console.log(error.message)
        throw error;
    }
}