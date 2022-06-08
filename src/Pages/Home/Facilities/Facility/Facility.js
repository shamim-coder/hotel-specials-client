import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Facility = ({ facility }) => {
    const { icon, title, paragraph } = facility;

    return (
        <div className="bg-white/20 p-14 rounded-xl border border-gray-500">
            <div className="flex items-center mb-5 gap-6">
                <FontAwesomeIcon className="text-3xl text-primary" icon={["fas", icon]} />
                <h2 className="text-2xl font-semibold">{title}</h2>
            </div>

            <p className="text-xl leading-8">{paragraph}</p>
        </div>
    );
};

export default Facility;
