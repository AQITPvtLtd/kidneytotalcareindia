import React from "react";
import { treatmentData } from "./data"; // apne path ke hisaab se adjust karein
import Link from "next/link";
import { Check } from "lucide-react"; // npm install lucide-react

const Sidebar = () => {
    return (
        <div>
            {treatmentData.map((item) => (
                <Link key={item.id} href={item.link}>
                    <div className="flex items-center gap-2 bg-red-800 text-white p-3 rounded-sm mb-2 cursor-pointer hover:bg-red-900 transition">
                        <Check size={16} />
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
