import { useState } from "react";

function NewAppointment({ setShowModal, showModal }) {
    const [selectedSlot, setSelectedSlot] = useState(null);

    const timeSlots = [
        { time: "9:00 AM", available: true },
        { time: "9:30 AM", available: true },
        { time: "10:00 AM", available: false },
        { time: "10:30 AM", available: false },
        { time: "11:00 AM", available: true },
        { time: "11:30 AM", available: true },
        { time: "12:00 AM", available: false },
        { time: "3:30 AM", available: true },
        { time: "4:00 AM", available: true },
        { time: "4:30 AM", available: true },
    ];


    function onClose() {
        setShowModal(false);
    }




    return (
        <>
            {showModal ? (
                <>
                    <div className="max-w-xl mx-auto">
                        {/* Header */}
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            New Appointment
                        </h2>
                        {/* separator */}
                        <div className="w-full h-px bg-gray-200 mb-4"></div>

                        {/* Department + Doctor */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500">
                                <option>Select department</option>
                                <option>Cardiology</option>
                                <option>Dermatology</option>
                                <option>Orthopedics</option>
                            </select>

                            <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500">
                                <option>Select doctor</option>
                                <option>Dr. Michael Johnson</option>
                                <option>Dr. Priya Sharma</option>
                                <option>Dr. Arjun Rao</option>
                            </select>
                        </div>

                        {/* Date */}
                        <div className="mb-4">
                            <input
                                type="date"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        {/* Time Slots */}
                        <div className="mb-4">
                            <p className="text-sm font-medium text-gray-700 mb-2">
                                Available Time Slots
                            </p>
                            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                                {timeSlots.map((slot, idx) => (
                                    <button
                                        key={idx}
                                        disabled={!slot.available}
                                        onClick={() => setSelectedSlot(slot.time)}
                                        className={`px-3 py-2 text-xs rounded-lg border transition 
                ${slot.available
                                                ? selectedSlot === slot.time
                                                    ? "bg-indigo-500 text-white border-indigo-500"
                                                    : "bg-white border-gray-300 text-gray-700 hover:bg-indigo-50"
                                                : "bg-red-50 text-red-500 border-red-300 cursor-not-allowed"
                                            }`}
                                    >
                                        {slot.time}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Reason */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Reason For Visit
                            </label>
                            <input
                                type="text"
                                placeholder="Enter Address"
                                className="w-full h-15 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                            />
                        </div>
                        {/* separator */}
                        <div className="w-full h-px bg-gray-200 mb-4"></div>


                        {/* Buttons */}
                        <div className="flex justify-end space-x-3">
                            <button className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button className="px-5 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
                                Book Appointment
                            </button>
                        </div>
                    </div>
                </>
            ) : (<></>)}
        </>
    );
}

export default NewAppointment;
