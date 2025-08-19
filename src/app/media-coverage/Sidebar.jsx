import React from "react";
import { data } from "./data"; 
import Link from "next/link";
import { Check } from "lucide-react"; 

const Sidebar = () => {
    return (
        <div>
            {data.map((item) => (
                <Link key={item.id} href={item.link}>
                    <div className="flex items-start gap-2 bg-red-800 text-white p-3 rounded-sm mb-2 cursor-pointer hover:bg-red-900 transition">
                        <div>  <Check size={16} className="mt-1" /> </div>
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Sidebar;
