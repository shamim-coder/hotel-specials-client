import React from "react";
import { useFetchData } from "../../../../Hooks/useFaceData";
import SectionTop from "../../Shared/SectionTop";

import Room from "../Room/Room";

const Accommodation = () => {
    const [rooms] = useFetchData("https://hotel-specials-server.vercel.app/hotels");

    return (
        <section className="container mx-auto text-center pb-24">
            <SectionTop title={"Hotel Accommodation"} paragraph={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi officiis illum nam quia impedit esse."} />
            <div className="grid grid-cols-4 gap-10">
                {rooms.map((room) => (
                    <Room key={room._id} room={room}></Room>
                ))}
            </div>
        </section>
    );
};

export default Accommodation;
