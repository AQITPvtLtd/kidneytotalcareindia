import TreatmentContent from "./TreatmentContent";
import { getTreatment } from "@/services/gettreatment";

export const dynamic = "force-dynamic";

export default async function TreatmentPage({ params }) {
    try {
        const { url } = params;
        const data = await getTreatment();
        const treatments = data?.result || [];

        // safe-find: guard against item.url being null/undefined
        const normalizedUrl = (url || "").toString().trim().toLowerCase();
        const treatment = treatments.find((item) => {
            const itemUrl = (item?.url || "").toString().trim().toLowerCase();
            return itemUrl === normalizedUrl;
        });

        if (!treatment) {
            return (
                <div className="py-20 text-center text-red-600">
                    <h1 className="text-2xl font-semibold">Treatment Not Found</h1>
                </div>
            );
        }

        return (
            <>
                {/* In app router, prefer export const metadata; using <head> may not work as expected */}
                <head>
                    <title>{treatment?.meta_title || "Treatment"}</title>
                    <meta name="description" content={treatment?.meta_desc || ""} />
                    <meta name="keywords" content={treatment?.meta_keyword || ""} />
                </head>

                <TreatmentContent treatment={treatment} />
            </>
        );
    } catch (err) {
        console.error("TreatmentPage error:", err);
        return (
            <div className="py-20 text-center text-red-600">
                <h1 className="text-2xl font-semibold">Something went wrong</h1>
                <p className="mt-2 text-sm">Please check server logs for details.</p>
            </div>
        );
    }
}
