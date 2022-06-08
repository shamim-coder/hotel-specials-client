import React from "react";
import "./SearchBooking.css";

const SearchBooking = () => {
    return (
        <form className="container mx-auto flex items-center gap-10 bg-black p-10">
            <input className="h-14 w-full text-lg py-3 px-3 border text-gray-300 border-gray-700 bg-black  focus:border-current focus:ring-0" type="date" placeholder="Arrival Date" id="arrival-date" required />
            <input className="h-14 w-full text-lg py-3 px-3 border text-gray-300 border-gray-700 bg-black focus:border-gray-700 focus:ring-0" type="date" id="departure-date" placeholder="Departure Date" required />

            <select id="quantity" className="block w-full h-14 text-lg py-3 px-5 border text-gray-400 border-gray-700 bg-black focus:border-gray-700 focus:ring-0">
                <option defaultValue={"Adult"}>Adult</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button className="w-full h-14 bg-primary hover:bg-primary-500 transition font-semibold px-10 py-3 uppercase text-lg">Get Started</button>
        </form>
    );
};

export default SearchBooking;
