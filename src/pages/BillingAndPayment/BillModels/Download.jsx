import logo from "../../../assets/hmslogo.jpg";

function Download({setdownloadmodal}) {
    function onClose(){
        setdownloadmodal(false);
    }
    return (
        <div className=" flex items-center justify-center">
            <div className="bg-white max-w-lg w-full rounded-xl shadow-lg p-5 font-sans">
                <div className="text-base font-semibold mb-4 border-b border-gray-200 pb-2">
                    Receipt Preview
                </div>

                <div className="flex justify-between mb-2">
                    {/* Left info */}
                    <div>
                        <div className="mt-10">
                            <span className="font-semibold">Receipt No :</span>{" "}
                            <span className="font-bold">#INV-2023-001</span>
                        </div>
                        <div>Date: June 15, 2023</div>
                    </div>
                    {/* Logo and address */}
                    <div className="text-right">
                        <div className="flex items-center gap-2 justify-end mb-2">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-20 w-30 object-cover border border-white"
                                style={{ background: "#fff", padding: 2 }}
                            />
                        </div>
                        <div className="text-xs text-gray-600 leading-tight">
                            123 Medical Drive<br />
                            City, State 12345
                        </div>
                    </div>
                </div>

                <div className="w-full h-px bg-gray-200 my-3"></div>

                {/* Bill To */}
                <div className="mb-5">
                    <div className="font-semibold mb-1 text-gray-700">Bill To:</div>
                    <div className="font-bold text-base text-gray-900 mb-0.5">John Doe</div>
                    <div className="text-sm">MRN: P1001</div>
                    <div className="text-sm">Phone: (123) 456-7890</div>
                </div>

                {/* Services & Charges */}
                <div className="mb-5">
                    <div className="font-semibold mb-2 text-gray-700">Services &amp; Charges</div>
                    <div className="border rounded-md border-gray-200 bg-white text-sm overflow-hidden">
                        <div className="flex justify-between border-b border-gray-100 px-4 py-2">
                            <span>Cardiology Consultation -Fee</span>
                            <span>$100</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 px-4 py-2">
                            <span>Medical Records Fee</span>
                            <span>$80</span>
                        </div>
                        <div className="flex justify-between border-b border-gray-100 px-4 py-2">
                            <span>Tax (5%):</span>
                            <span>$3.83</span>
                        </div>
                        <div className="flex justify-between font-semibold px-4 py-2 bg-gray-50">
                            <span>Total:</span>
                            <span>$184</span>
                        </div>
                    </div>
                </div>

                {/* Payment and transaction info */}
                <div className="mb-8 flex justify-between text-xs text-gray-500">
                    <div>Payment Method: Credit Card</div>
                    <div>Transaction ID: TXN123456789</div>
                </div>

                {/* Footer */}
                <div className="text-center text-xs mb-8 text-gray-400">
                    Thank you for choosing <span className="font-medium text-gray-600">MediCare Hospital</span>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-3">
                    <button className="bg-[#b6aedc] text-white rounded-full px-5 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-300 shadow-sm transition"
                    onClick={onClose}
                    >
                        Close
                    </button>
                    <button className="bg-[#6E59D9] text-white rounded-full px-5 py-2 text-sm font-medium shadow-md hover:bg-indigo-700 transition">
                        Print
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Download;
