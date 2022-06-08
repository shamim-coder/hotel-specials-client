import React from "react";

const SectionTop = ({ title, paragraph, dark }) => {
    return (
        <div className="section-top py-20 text-center">
            <h2 className={`text-5xl font-bold mb-5 ${dark ? "text-white" : "text-black"}`}>{title}</h2>
            <p className={`text-xl ${dark ? "text-gray-400" : "text-gray-600"}`}>{paragraph}</p>
        </div>
    );
};

export default SectionTop;
