import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
    const { bookingId } = useParams();
    return (
        <section className="container mx-auto my-20">
            <h1>this is booking id: {bookingId}</h1>
        </section>
    );
};

export default Booking;
