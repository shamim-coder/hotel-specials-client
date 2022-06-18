import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ManageHotel = () => {
    const activeStyle = {
        color: "#F58229",
    };

    return (
        <div className="container mx-auto grid grid-cols-12 py-20">
            <div className="col-span-3 border flex flex-col px-5 py-10 leading-10 bg-gray-200">
                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className="text-xl font-semibold mb-5" to="/manage-hotel/update">
                    Manage Hotel
                </NavLink>

                <NavLink style={({ isActive }) => (isActive ? activeStyle : undefined)} className="text-xl font-semibold mb-5" to="/manage-hotel/add">
                    Add Hotel
                </NavLink>
            </div>
            <div className="col-span-9">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default ManageHotel;
