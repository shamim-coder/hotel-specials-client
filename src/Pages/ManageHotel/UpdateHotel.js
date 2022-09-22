import React, { useEffect, useRef, useState } from "react";
import { useFetchData } from "../../Hooks/useFaceData";
import DeleteModal from "../Shared/Modals/DeleteModal/DeleteModal";
import UpdateModal from "../Shared/Modals/UpdateModal/UpdateModal";

const UpdateHotel = () => {
    const [pageCount, setPageCount] = useState(0);
    const [size, setSize] = useState(5);
    const [page, setPage] = useState(0);
    const [hotels, setHotels] = useState([]);

    const inputPageNumber = useRef(null);

    useEffect(() => {
        const API = ` https://hotel-specials.onrender.com/hotels?page=${page}&size=${size}`;
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                setHotels(data);
            });
    }, [page, size]);

    const [modal, setModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    // const [confirm, setConfirm] = useState(false);

    const handleDelete = (id) => {
        const remaining = hotels.filter((hotel) => hotel._id !== id);

        const confirm = window.confirm("are you sure?");

        if (confirm) {
            fetch(` https://hotel-specials.onrender.com/delete-hotel/${id}`, {
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

    const [hotelCount] = useFetchData(" https://hotel-specials.onrender.com/hotel-count");

    useEffect(() => {
        const pages = Math.ceil(hotelCount / size);
        setPageCount(pages);
    }, [hotelCount, size]);

    return (
        <div>
            <div className="bg-white p-8 rounded-md w-full">
                <div className=" flex items-center justify-between pb-6">
                    <h2 className="text-center text-4xl font-bold">Manage / Update / Delete Items</h2>
                </div>
                <div>
                    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                        <div className="inline-block min-h-[515px] min-w-full shadow rounded-lg overflow-hidden">
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
                                                <td className="px-5 py-5 ">
                                                    <p className="text-gray-900">{index + 1}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-white">
                                                    <p className="text-gray-900">{hotel.type}</p>
                                                </td>
                                                <td className="px-5 py-5">
                                                    <img className="rounded-full w-10 h-10" src={hotel.picture} alt="" />
                                                </td>
                                                <td className="px-5 py-5 ">
                                                    <p className="text-gray-900">${hotel.price}</p>
                                                </td>
                                                <td className="px-5 py-5 bg-white ">
                                                    <p className="text-gray-900x">
                                                        <button onClick={() => handleUpdate()} className="bg-slate-500 p-2 text-white">
                                                            Update
                                                        </button>
                                                    </p>
                                                </td>

                                                <td className="px-5 py-5 bg-white">
                                                    <button onClick={() => handleDelete(hotel._id)} className="bg-red-600 p-2 text-white">
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                                    <div>
                                        <p className="text-sm text-gray-700">
                                            Showing <span className="font-medium">{page + 1}</span> to <span className="font-medium">{pageCount}</span> of <span className="font-medium">{hotelCount}</span> results
                                        </p>
                                    </div>
                                    <div>
                                        <nav className="relative z-0 inline-flex rounded-md shadow-sm">
                                            <button className="px-2 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Previous</span>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                            {[...Array(pageCount).keys()].map((number) => (
                                                <button
                                                    onClick={() => {
                                                        setPage(number);
                                                        inputPageNumber.current.value = number + 1;
                                                    }}
                                                    className={` ${page === number ? "bg-primary text-white" : "bg-white text-gray-500"}  px-4 py-2 border`}
                                                >
                                                    {number + 1}
                                                </button>
                                            ))}

                                            <input ref={inputPageNumber} onBlur={(e) => setPage(parseInt(e.target.value) - 1)} className="w-10" defaultValue={1} type="text" />

                                            <button className="px-2 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50">
                                                <span className="sr-only">Next</span>
                                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </button>

                                            <div className="ml-5">
                                                <span className="text-sm text-gray-700 mr-3">show per page:</span>
                                                <select onChange={(e) => setSize(e.target.value)} name="number__of__page" id="number__of__page">
                                                    <option selected value="5">
                                                        5
                                                    </option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                    <option value="20">20</option>
                                                </select>
                                            </div>
                                        </nav>
                                    </div>
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
