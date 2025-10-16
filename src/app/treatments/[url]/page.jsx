import React from "react";
import TreatmentContent from "./TreatmentContent";

export default async function TreatmentPage({ params }) {
    const { url } = params;

    return (
        <>
            <TreatmentContent url={url} />
        </>
    );
}
