
function Details({ setshowdetails }) {
    function onClose() {
        setshowdetails(false);
    }
    return (
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mt-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-2">
                <h2 className="text-lg font-semibold text-[#2b3674]">
                    Bill Details - #CN-78945
                </h2>
                <span className="text-xs bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-medium">
                    Pending
                </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">Consultation Fee – Dr. Smith</p>

            {/* Info Section */}
            <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Patient Information */}
                <div className="border rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-[#2b3674] mb-2">
                        Patient Information
                    </h3>
                    <p className="text-sm text-gray-600">
                        <span className="font-medium">Bill To:</span> John Doe
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-medium">Phone:</span> (123) 456-7890
                    </p>
                    <p className="text-sm text-gray-600">
                        <span className="font-medium">Email:</span> Johndoe@gmail.com
                    </p>
                </div>

                {/* Visit Details */}
                <div className="border rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-[#2b3674] mb-2">
                        Visit Details
                    </h3>
                    <p className="text-sm text-gray-600">
                        Dr. Sarah Johnson MD – Cardiology
                    </p>
                    <p className="text-sm text-gray-600">22-08-2023 at 14:30</p>
                    <p className="text-sm text-indigo-500 font-medium">Routine Cardiac</p>
                </div>
            </div>

            {/* Services & Charges */}
            <h3 className="text-sm font-semibold text-[#2b3674] mb-2">
                Services & Charges
            </h3>
            <div className="border rounded-lg" style={{border:"1px solid #2b3674"}}>
                <div className="flex justify-between items-center px-4 py-2 border-b">
                    <p className="text-sm text-gray-700">Cardiology Consultation Fee</p>
                    <p className="text-sm text-gray-800 font-medium">$100</p>
                </div>
                <div className="flex justify-between items-center px-4 py-2 border-b">
                    <p className="text-sm text-gray-700">Medical Records Fee</p>
                    <p className="text-sm text-gray-800 font-medium">$80</p>
                </div>
                <div className="flex justify-between items-center px-4 py-2 border-b">
                    <p className="text-sm text-gray-700">Tax (5%)</p>
                    <p className="text-sm text-gray-800 font-medium">$3.83</p>
                </div>
                <div className="flex justify-between items-center px-4 py-2">
                    <p className="text-sm font-semibold text-[#2b3674]">Total:</p>
                    <p className="text-sm font-semibold text-[#2b3674]">$184</p>
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 mt-3">
                <button className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                    onClick={onClose}
                >
                    Close
                </button>
                <button className="px-5 py-2 px-4 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
                    Pay
                </button>
            </div>
        </div>
    );
}

export default Details;
