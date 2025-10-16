"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { getTreatment } from "@/services/gettreatment";
import Head from 'next/head';

const TreatmentContent = ({ url }) => {
    const [treatment, setTreatment] = useState([]);
    useEffect(() => {
        async function getData() {
            const result = await getTreatment();
            setTreatment(result.result);
        }
        getData();
    }, []);
    const TreatmentDetail = treatment?.find((b) => b.url == url);
    // ✅ Update browser tab title dynamically
    useEffect(() => {
        if (TreatmentDetail) {
            document.title = TreatmentDetail.meta_title || TreatmentDetail.title;
        }
    }, [TreatmentDetail]);

    if (!TreatmentDetail) {
        return <p className="text-center text-red-500">Loading...</p>;
    }

    return (

        <>{/* SEO Meta Tags */}
            <Head>
                <title>{TreatmentDetail.meta_title || TreatmentDetail.title}</title>
                <meta
                    name="description"
                    content={
                        TreatmentDetail.meta_disc ||
                        TreatmentDetail.small_desc ||
                        ""
                    }
                />
                <meta
                    name="keywords"
                    content={TreatmentDetail.meta_keyword || ""}
                />
            </Head>
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content */}
                <div className="lg:col-start-2 lg:col-span-7">
                    <h1 className="text-3xl font-bold text-primary mb-6">
                        {TreatmentDetail.title}
                    </h1>

                    {/* Render HTML safely from database */}
                    <div
                        className="prose max-w-none text-gray-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: TreatmentDetail.description }}
                    ></div>
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-3 lg:col-start-9">
                    <div className="sticky top-[180px]">
                        <Sidebar />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TreatmentContent;
