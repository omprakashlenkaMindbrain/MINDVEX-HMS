import { useState } from "react";
import LabReportsModal from "./LabtestModals/LabReportsModal";

function TestresultsPages() {

    const testResults = [
        {
            id: 1,
            title: "Chest X-ray Results",
            doctor: "Dr. Sarah Johnson",
            date: "2025-08-20",
            status: "Normal",
        },
        {
            id: 2,
            title: "Lipid Panel",
            doctor: "Dr. Michael Chen",
            date: "2025-08-18",
            status: "Abnormal",
        },
        {
            id: 3,
            title: "Lipid Panel",
            doctor: "Dr. Michael Chen",
            date: "2025-08-18",
            status: "Abnormal",
        },
    ];


    // reports
    const [showModal, setShowModal] = useState(false);
    // diagnosis
    const [diagnosis, setdiagnosis]=useState(false);


    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow-md mt-5">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-blue-900">
                        Lab Test Results
                    </h2>
                </div>
                <div className="w-full h-px bg-gray-200 my-3"></div>

                {/* Appointment List */}
                <div className="space-y-4">
                    {testResults.map((appt) => (
                        <div
                            key={appt.id}
                            className="rounded-lg p-4 border border-gray-200 shadow-sm"
                        >
                            <p className="text-gray-900 text-sm flex items-center font-bold">
                                {appt.title}
                                <span
                                    className={`ml-5 px-2 py-0.5 rounded ${appt.status === "Normal"
                                        ? "bg-green-100 text-green-700"
                                        : appt.status === "Completed"
                                            ? "bg-blue-100 text-blue-700"
                                            : "bg-yellow-100 text-yellow-700"
                                        }`}
                                >
                                    {appt.status}
                                </span>
                            </p>
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                                <div>
                                    <p className="font-semibold text-gray-500 text-sm">
                                        By : {appt.doctor}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        <span className="text-gray-500 font-bold text-sm">
                                            {appt.date}
                                        </span>
                                    </p>
                                </div>

                                <div className="flex space-x-2 mt-3 md:mt-0 w-full md:w-auto">
                                    <button className="flex items-center gap-2 px-3 py-1 rounded-md border-2 bg-[#6E59D9] text-sm text-white"
                                        onClick={() => { setShowModal(true) }}
                                    >
                                        Lab Report
                                    </button>

                                    {/* Cancel */}
                                    <button className="flex items-center gap-2 px-3 py-1 rounded-md border-2 bg-green-600 text-sm text-white"
                                        onClick={() => { setcancel(true) }}
                                    >
                                        Diagnostic
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className=" rounded-lg shadow-lg w-full max-w-xl relative">
                        <LabReportsModal showModal={showModal} setShowModal={setShowModal}/>
                    </div>
                </div>
            )}
        </>
    )
}

export default TestresultsPages