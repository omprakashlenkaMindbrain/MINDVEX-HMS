
function Pyment({ setShowModal }) {
    function onClose() {
        setShowModal(false);
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-5">
            {/* Header */}
            <h2 className="text-lg font-semibold text-[#2b3674] mb-4">
                Secure Payment
            </h2>

            {/* Amount Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-5 flex justify-between items-center">
                <div>
                    <p className="text-sm text-gray-500">
                        Amount to Pay :
                    </p>
                    <p className="text-sm text-gray-500">
                        Bill ID :
                    </p>
                </div>
                <p className="text-gray-800 font-semibold">$120.00</p>
            </div>

            {/* Payment Method */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Payment Method
                </label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <option>Credit Card</option>
                    <option>Debit Card</option>
                    <option>UPI</option>
                    <option>Net Banking</option>
                </select>
            </div>

            {/* Card Number */}
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600 mb-1">
                    Card Number
                </label>
                <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            {/* Expiry and CVV Row */}
            <div className="grid grid-cols-2 gap-3 mb-5">
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        Expiry
                    </label>
                    <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 mb-1">
                        CVV
                    </label>
                    <input
                        type="text"
                        placeholder="123"
                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3">
                <button className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                    onClick={onClose}
                >
                    Cancel
                </button>
                <button className="px-5 py-2 px-4 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
                    Pay
                </button>
            </div>
        </div>
    );
}

export default Pyment;
