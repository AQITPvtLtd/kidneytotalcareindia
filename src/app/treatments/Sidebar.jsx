"use client";

import { getTreatment } from '@/services/gettreatment';
import React, { useEffect, useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getTreatment();
                if (data.success) {
                    setTreatments(data.result);
                }
            } catch (error) {
                console.log("Error Fetching Treatments: ", error);
            }

        };
        fetchData();
    }, [])
    return (
        <div>
            <aside className="bg-white text-black rounded-xl shadow-lg p-6 w-full lg:w-80">
                <h2
                    className="text-2xl font-bold mb-6 border-b pb-2 border-gray-300"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Treatments
                </h2>

                {treatments.length > 0 ? (
                    <ul className="space-y-3">
                        {treatments.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={`/treatments/${item.url}`}
                                    className="flex items-start gap-2 group hover:text-blue-600 transition-colors duration-300"
                                >
                                    <div> <FaArrowCircleRight className="mt-1 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" /> </div>
                                    <span className="leading-tight">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">Loading treatments...</p>
                )}
            </aside>
        </div>
    )
}

export default Sidebar