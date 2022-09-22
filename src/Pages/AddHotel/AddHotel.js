import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddHotel = () => {
    const [success, setSuccess] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const handleAddBooking = (data) => {
        console.log(data);
        const url = ` https://hotel-specials.onrender.com/add-hotel`;
        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setSuccess("Hotel Added Successfully!");
                reset();
            });
    };

    return (
        <div className="container mx-auto py-20">
            <form className="grid mx-auto border p-5" onSubmit={handleSubmit(handleAddBooking)}>
                <h1 className="text-3xl font-bold mb-5 text-center">Add Hotel</h1>
                <input className="border px-3 py-2 mb-4" {...register("type", { required: true })} placeholder="Booking Type" />
                <input className="border px-3 py-2 mb-4" {...register("price", { required: true })} placeholder="Booking Price" />
                <input className="border px-3 py-2 mb-4" {...register("picture", { required: true })} placeholder="Image Url" />

                {(errors.type || errors.price || errors.picture) && <span className="text-red-600">This field is required</span>}
                {success ? <span className="text-green-600">{success}</span> : undefined}

                <input className="bg-primary py-2 mt-4" value="Add Hotel" type="submit" />
            </form>
        </div>
    );
};

export default AddHotel;
