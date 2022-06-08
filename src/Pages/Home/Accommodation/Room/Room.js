import React from "react";

const Room = ({ room }) => {
    const { type, picture, price } = room;
    console.log(room);
    return (
        <div>
            <div className="room-image relative">
                <img className="w-full h-80 object-cover" src={picture} alt="" />
                <button className="absolute bottom-6 right-[50%] translate-x-1/2 bg-primary hover:bg-primary-500 text-white transition font-semibold px-8 py-3 uppercase text-lg mt-10">Book Now</button>
            </div>
            <h2 className="text-2xl font-semibold mt-4">{type}</h2>
            <h3 className="text-3xl font-bold text-cyan-500">
                ${price}/<span className="text-xl font-normal">night</span>
            </h3>
        </div>
    );
};

export default Room;
