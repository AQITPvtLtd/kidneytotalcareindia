import TreatmentContent from "./TreatmentContent";
import { getTreatment } from "@/services/gettreatment";

export const dynamic = "force-dynamic";

export default async function TreatmentPage({ params }) {
    const { url } = params;
    const data = await getTreatment();

    const treatments = data?.result || [];

    const treatment = treatments.find(
        (item) => item.url.trim().toLowerCase() === url.trim().toLowerCase()
    );

    if (!treatment) {
        return (
            <div className="py-20 text-center text-red-600">
                <h1 className="text-2xl font-semibold">Treatment Not Found</h1>
            </div>
        );
    }

    return (
        <>
            <head>
                <title>{treatment.meta_title}</title>
                <meta name="description" content={treatment.meta_desc} />
                <meta name="keywords" content={treatment.meta_keyword} />
            </head>

            <TreatmentContent treatment={treatment} />
        </>
    );
}
