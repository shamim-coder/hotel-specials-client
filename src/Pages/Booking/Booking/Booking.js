import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchData } from "../../../Hooks/useFaceData";

const Booking = () => {
    const { bookingId } = useParams();

    const [hotel, setHotel] = useState({});

    const { type, picture, price } = hotel;

    useEffect(() => {
        fetch(`http://localhost:5000/hotel/${bookingId}`)
            .then((res) => res.json())
            .then((data) => setHotel(data));
    }, [bookingId]);

    return (
        <section className="container mx-auto my-20 grid grid-cols-2">
            <div className="single-booking text-center">
                <h1 className="text-4xl font-bold my-5">{type}</h1>
                <img className="w-full" src={picture} alt="" />
                <p className="text-2xl my-5">Price: {price}</p>
            </div>
        </section>
    );
};

export default Booking;
