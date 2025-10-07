import { useState } from "react";
import { FaEye } from "react-icons/fa";
import Details from "./BillModels/Details";
import Download from "./BillModels/Download";
import Pyment from "./BillModels/Pyment";



function TabsDataPages({ value }) {
    // console.log(value);
    const [showModal, setShowModal] = useState(false);

    // details modal
    const [showdetails, setshowdetails] = useState(false);

    // download modal
    const [downloadmodal, setdownloadmodal] = useState(false);




    const currentbills = [
        {
            id: 1,
            billNo: "CN-78945",
            title: "Consultation Fee – Dr. Smith",
            date: "Aug 15, 2023",
            status: "Pending",
            amount: 120.00,
        },
        {
            id: 2,
            billNo: "CN-78946",
            title: "Consultation Fee – Dr. Smith",
            date: "Aug 15, 2023",
            status: "Pending",
            amount: 150.00,
        },
        {
            id: 3,
            billNo: "CN-78947",
            title: "Consultation Fee – Dr. Smith",
            date: "Aug 15, 2023",
            status: "Pending",
            amount: 200.00,
        },
    ];


    // payment history
    const paymentHistory = [
        {
            id: 1,
            billNo: "CN-68945",
            title: "Consultation Fee – Dr. Smith",
            date: "Aug 15, 2023",
            status: "paid",
            amount: 120.00,
        },
        {
            id: 2,
            billNo: "CN-79946",
            title: "Pshyotherapy Session",
            date: "Aug 15, 2023",
            status: "paid",
            amount: 150.00,
        },
        {
            id: 3,
            billNo: "CN-77947",
            title: "X-ray service – Dr. Smith",
            date: "Aug 15, 2023",
            status: "paid",
            amount: 200.00,
        },
    ];


    return (
        <>
            {value === "currentbills" && (
                <div className="bg-white p-4 rounded-lg shadow-md mt-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-blue-900">
                            Current Bills
                        </h2>
                    </div>
                    <div className="w-full h-px bg-gray-200 my-3"></div>

                    {/* Appointment List */}
                    <div className="space-y-4">
                        {currentbills.map((appt) => (
                            <div
                                key={appt.id}
                                className="rounded-lg p-4 border border-gray-200 shadow-sm"
                            >
                                {/* Date + Status */}
                                <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                                    <p>Bill #: {appt.billNo}</p>
                                    <span
                                        className={`px-2 py-0.5 text-xs rounded ${appt.status === "Confirmed"
                                            ? "bg-green-100 text-green-700"
                                            : appt.status === "Completed"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {appt.status}
                                    </span>
                                </div>


                                {/* Separator */}
                                <div className="w-full h-px bg-gray-200 my-3"></div>

                                {/* Doctor Info + Actions */}
                                <div className="flex flex-col gap-2">
                                    {/* Row 1: Title & Amount */}
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-800 font-bold text-[15px]">{appt.title}</p>
                                        <p className="text-gray-900 font-semibold">${appt.amount}</p>
                                    </div>

                                    {/* Row 2: Date & Buttons */}
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-500">
                                            Date:{" "}
                                            <span className="text-gray-600 font-bold">{appt.date}</span>
                                        </p>

                                        <div className="flex gap-2">
                                            {/* View Button */}
                                            <button
                                                className="flex items-center gap-2 px-3 py-1 rounded-md text-white text-sm bg-[#6E59D9] hover:bg-[#5A46C8] transition"
                                                onClick={() => setshowdetails(true)}
                                            >
                                                <FaEye size={14} /> View
                                            </button>

                                            {/* Pay Now Button */}
                                            <button
                                                className="flex items-center gap-2 px-3 py-1 rounded-md text-white text-sm bg-green-600 hover:bg-green-700 transition"
                                                onClick={() => setShowModal(true)}
                                            >
                                                Pay Now
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}
            {value === "paymenthistory" && (
                <div className="bg-white p-4 rounded-lg shadow-md mt-5">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-blue-900">
                            Payment History
                        </h2>
                    </div>
                    <div className="w-full h-px bg-gray-200 my-3"></div>

                    {/* Appointment List */}
                    <div className="space-y-4">
                        {paymentHistory.map((appt) => (
                            <div
                                key={appt.id}
                                className="rounded-lg p-4 border border-gray-200 shadow-sm"
                            >
                                {/* Date + Status */}
                                <div className="flex justify-between items-center text-sm font-semibold text-gray-600">
                                    <p>Bill #: {appt.billNo}</p>
                                    <span
                                        className={`px-2 py-0.5 text-xs rounded ${appt.status === "paid"
                                            ? "bg-green-100 text-green-700"
                                            : appt.status === "Completed"
                                                ? "bg-blue-100 text-blue-700"
                                                : "bg-yellow-100 text-yellow-700"
                                            }`}
                                    >
                                        {appt.status}
                                    </span>
                                </div>


                                {/* Separator */}
                                <div className="w-full h-px bg-gray-200 my-3"></div>

                                {/* Doctor Info + Actions */}
                                <div className="flex flex-col gap-2">
                                    {/* Row 1: Title & Amount */}
                                    <div className="flex justify-between items-center">
                                        <p className="text-gray-800 font-bold text-[15px]">{appt.title}</p>
                                        <p className="text-gray-900 font-semibold">${appt.amount}</p>
                                    </div>

                                    {/* Row 2: Date & Buttons */}
                                    <div className="flex justify-between items-center">
                                        <p className="text-sm text-gray-500">
                                            Date:{" "}
                                            <span className="text-gray-600 font-bold">{appt.date}</span>
                                        </p>

                                        <div className="flex gap-2">
                                            {/* View Button */}
                                            <button
                                                className="flex items-center gap-2 px-3 py-1 rounded-md text-white text-sm bg-[#6E59D9] hover:bg-[#5A46C8] transition"
                                                onClick={() => setdownloadmodal(true)}
                                            >
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* modals */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className=" rounded-lg shadow-lg w-full max-w-xl relative">
                        <Pyment showModal={showModal} setShowModal={setShowModal} />
                    </div>
                </div>
            )}

            {/* details */}
            {showdetails && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className=" rounded-lg shadow-lg w-full max-w-xl relative">
                        <Details showdetails={showdetails} setshowdetails={setshowdetails} />
                    </div>
                </div>
            )}

            {/* downloads */}
            {downloadmodal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
                    <div className=" rounded-lg shadow-lg w-full max-w-xl relative">
                        <Download downloadmodal={downloadmodal} setdownloadmodal={setdownloadmodal}/>
                    </div>
                </div>
            )}
        </>
    )
}

export default TabsDataPages


