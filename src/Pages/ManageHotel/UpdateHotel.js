import React from "react";
import { useState } from "react";
import { useFetchData } from "../../Hooks/useFaceData";
import DeleteModal from "../Shared/Modals/DeleteModal/DeleteModal";
import UpdateModal from "../Shared/Modals/UpdateModal/UpdateModal";

const UpdateHotel = () => {
    const [hotels, setHotels] = useFetchData("http://localhost:5000/hotels");

    const [modal, setModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    // const [confirm, setConfirm] = useState(false);

    const handleDelete = (id) => {
        const remaining = hotels.filter((hotel) => hotel._id !== id);

        const confirm = window.confirm("are you sure?");

        if (confirm) {
            fetch(`http://localhost:5000/delete-hotel/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    setHotels(remaining);
                    console.log(data);
                });
        }
    };
    const handleUpdate = () => {
        setUpdateModal(true);
    };

    return (
        <div>
            <div className="bg-white p-8 rounded-md w-full">
                <div className=" flex items-center justify-between pb-6">
                    <h2 className="text-center text-4xl font-bold">Manage / Update / Delete Items</h2>
                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th className="px-5 py-3 bg-gray-100 text-left text-gray-600 uppercase tracking-wider">SL</th>
                                        <th className="px-5 py-3 bg-gray-100 text-left text-gray-600 uppercase tracking-wider">Hotel Type</th>
                                        <th className="px-5 py-3 bg-gray-100 text-left text-gray-600 uppercase tracking-wider">Picture</th>
                                        <th className="px-5 py-3 bg-gray-100 text-left text-gray-600 uppercase tracking-wider">Price</th>
                                        <th className="px-5 py-3 bg-gray-100 text-left text-gray-600 uppercase tracking-wider">Update</th>
                                        <th className="px-5 py-3 bg-gray-100 text-left text-gray-600 uppercase tracking-wider">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {hotels.map((hotel, index) => {
                                        return (
                                            <tr key={hotel._id}>
                                                <td className="px-5 py-5 text-sm">
                                                    <p className="text-gray-900">{index + 1}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-white">
                                                    <p className="text-gray-900">{hotel.type}</p>
                                                </td>
                                                <td className="px-5 py-5 text-sm">
                                                    <img className="rounded-full w-10 h-10" src={hotel.picture} alt="" />
                                                </td>
                                                <td className="px-5 py-5 text-sm">
                                                    <p className="text-gray-900">${hotel.price}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-white text-sm">
                                                    <p className="text-gray-900x">
                                                        <button onClick={() => handleUpdate()} className="bg-slate-500 p-2 text-white">
                                                            Update
                                                        </button>
                                                    </p>
                                                </td>

                                                <td className="px-5 py-5 bg-white text-sm">
                                                    <button onClick={() => handleDelete(hotel._id)} className="bg-red-600 p-2 text-white">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 1 of {hotels.length} Entries</span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">Prev</button>
                                    &nbsp; &nbsp;
                                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modal && <DeleteModal handleDelete={handleDelete} setModal={setModal} />}
            {updateModal && <UpdateModal setUpdateModal={setUpdateModal} />}
        </div>
    );
};

export default UpdateHotel;
