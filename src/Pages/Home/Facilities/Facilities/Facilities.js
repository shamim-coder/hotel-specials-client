import React from "react";
import { useFetchData } from "../../../../Hooks/useFaceData";
import SectionTop from "../../Shared/SectionTop";
import Facility from "../Facility/Facility";
import "./Facilities.css";

const Facilities = () => {
    const [facilities] = useFetchData("Database/facilities.json");
    console.log(facilities);

    return (
        <section className="facilities-bg bg-slate-900/70 pb-24">
            <div className="container mx-auto">
                <SectionTop dark={true} title="Royal Facilities" paragraph="Who are in extremely love with eco friendly system." />
                <div className="grid grid-cols-3 gap-10 text-white">
                    {facilities.map((facility) => (
                        <Facility key={facility._id} facility={facility} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Facilities;
