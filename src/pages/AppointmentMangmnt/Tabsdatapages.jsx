import { useState } from "react";
import { FaRegClock } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import CancelMoldel from "./upcommingAppointmentsmodels/CancelMoldel";
import NewAppointment from "./upcommingAppointmentsmodels/NewAppointment";
import RescheduleModel from "./upcommingAppointmentsmodels/RescheduleModel";

function Tabsdatapages({ value }) {
    const [showModal, setShowModal] = useState(false);

    // reschedule model hooks
    const [reschedule, setreschedule] = useState(false);

    // cancel model hooks
    const [cancel, setcancel] = useState(false);

    // upcoming appointment
    const appointments = [
        {
            id: 1,
            date: "Aug 28, 2023 at 10:30 AM",
            doctor: "Dr. Michael Johnson",
            department: "Cardiology",
            status: "Confirmed",
        },
        {
            id: 2,
            date: "Aug 28, 2023 at 10:30 AM",
            doctor: "Dr. Michael Johnson",
            department: "Cardiology",
            status: "Pending Confirmation",
        },
        {
            id: 3,
            date: "Aug 28, 2023 at 10:30 AM",
            doctor: "Dr. Michael Johnson",
            department: "Cardiology",
            status: "Completed",
        },
    ];

    // past appointment
    const Pastappointments = [
        {
            id: 1,
            date: "Aug 28, 2023 at 10:30 AM",
            doctor: "Dr. Michael Johnson",
            department: "Cardiology",
            status: "Completed",
        },
        {
            id: 2,
            date: "Aug 28, 2023 at 10:30 AM",
            doctor: "Dr. Michael Johnson",
            department: "Cardiology",
            status: "Completed",
        },
        {
            id: 3,
            date: "Aug 28, 2023 at 10:30 AM",
            doctor: "Dr. Michael Johnson",
            department: "Cardiology",
            status: "Completed",
        },
    ];




    return (
        <div>
            {/* UPCOMING */}
            {value === "upcoming" && (
                <div className="bg-white p-4 rounded-lg shadow-md mt-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-blue-900">
                            Your Upcoming Appointments
                        </h2>
                        <button
                            className="bg-[#6E59D9] hover:bg-[#6E39D9] text-white px-4 py-2 rounded-lg text-sm sm:text-base"
                            onClick={() => setShowModal(true)}
                        >
                            + Book New Appointment
                        </button>
                    </div>
                    <div className="w-full h-px bg-gray-200 my-3"></div>

                    {/* Appointment List */}
                    <div className="space-y-4">
                        {appointments.map((appt) => (
                            <div
                                key={appt.id}
                                className="rounded-lg p-4 border border-gray-200 shadow-sm"
                            >
                                {/* Date + Status */}
                                <p className="text-gray-600 text-sm flex items-center font-semibold">
                                    {appt.date}
                                    <span
                                        className={`ml-2 px-2 py-0.5 text-xs rounded ${appt.status === "Confirmed"
                                            ? "bg-green-100 text-green-700"
                                            : appt.status === "Completed"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {appt.status}
                                    </span>
                                </p>

                                {/* Separator */}
                                <div className="w-full h-px bg-gray-200 my-3"></div>

                                {/* Doctor Info + Actions */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    <div>
                                        <p className="font-large text-gray-800 font-bold">
                                            {appt.doctor}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Department:{" "}
                                            <span className="text-gray-600 font-bold">
                                                {appt.department}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="flex space-x-2 mt-3 md:mt-0 w-full md:w-auto">
                                        {/* Reschedule */}
                                        <button className="flex items-center gap-2 px-3 py-1 rounded-md border-2 border-[#6E59D9] text-[#6E59D9] hover:bg-purple-50 w-full md:w-auto text-sm"
                                            onClick={() => { setreschedule(true) }}
                                        >
                                            <FaRegClock size={16} />
                                            Reschedule
                                        </button>

                                        {/* Cancel */}
                                        <button className="flex items-center gap-2 px-3 py-1 rounded-md border-2 border-red-500 text-red-500 hover:bg-red-50 w-full md:w-auto text-sm"
                                            onClick={() => { setcancel(true) }}
                                        >
                                            <MdCancel size={18} />
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* PAST */}
            {value === "past" && (
                <div className="bg-white p-4 rounded-lg shadow-md mt-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-blue-900">
                            Your Past Appointments
                        </h2>
                    </div>

                    {/* Full-width Separator */}
                    <div className="w-full h-px bg-gray-200 mb-4"></div>

                    {/* Appointment List */}
                    <div className="space-y-4">
                        {Pastappointments.map((appt) => (
                            <div
                                key={appt.id}
                                className="rounded-lg p-4 border border-gray-200 shadow-sm hover:shadow-md transition"
                            >
                                {/* Date */}
                                <p className="text-gray-500 text-sm font-medium">{appt.date}</p>

                                {/* Separator */}
                                <div className="w-full h-px bg-gray-200 my-3"></div>

                                {/* Doctor Info + Status */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                    {/* Left Info */}
                                    <div>
                                        <p className="text-gray-900 font-semibold">{appt.doctor}</p>
                                        <p className="text-sm text-gray-500">
                                            Department:{" "}
                                            <span className="text-gray-700 font-medium">
                                                {appt.department}
                                            </span>
                                        </p>
                                    </div>

                                    {/* Right Status Badge */}
                                    <div className="flex space-x-2 mt-3 md:mt-0 w-full md:w-auto">
                                        <span
                                            className={`ml-2 px-3 py-1 text-xs font-medium ${appt.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : "bg-yellow-100 text-yellow-700"
                                                }`}
                                            style={{ borderRadius: "3px" }}
                                        >
                                            {appt.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* appointmet MODAL */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-5 relative">
                        <NewAppointment showModal={showModal} setShowModal={setShowModal} />
                    </div>
                </div>
            )}
            {/* reschedule modal */}
            {reschedule && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-5 relative">
                        <RescheduleModel reschedule={reschedule} setreschedule={setreschedule} />
                    </div>
                </div>
            )}
            {/* cancel modal */}
            {cancel && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-5 relative">
                        <CancelMoldel cancel={cancel} setcancel={setcancel}/>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Tabsdatapages;
