"use client";
import React from "react";
import Sidebar from "../Sidebar";

const TreatmentContent = ({ treatment }) => {
    if (!treatment) {
        return null;
    }

    return (
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-start-2 lg:col-span-7">
                <h1 className="text-3xl font-bold text-primary mb-6">
                    {treatment.title || "Untitled"}
                </h1>

                <div
                    className="prose max-w-none text-gray-700 leading-relaxed"
                    // render safely: fallback to empty string if no description
                    dangerouslySetInnerHTML={{ __html: treatment.description || "" }}
                ></div>
            </div>

            <div className="lg:col-span-3 lg:col-start-9">
                <div className="sticky top-[180px]">
                    <Sidebar />
                </div>
            </div>
        </div>
    );
};

export default TreatmentContent;
