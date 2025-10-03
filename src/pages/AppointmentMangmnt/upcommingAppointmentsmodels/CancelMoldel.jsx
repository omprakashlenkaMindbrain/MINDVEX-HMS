
function CancelMoldel({ cancel, setcancel }) {
    return (
        <>
            {cancel ? (
                <>
                    <div className="max-w-xl mx-auto">
                        {/* Header */}
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Cancel Appointment
                        </h2>
                        {/* separator */}
                        <div className="w-full h-px bg-gray-200 mb-4"></div>
                        {/* Reason */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Reason For Cancelation
                            </label>
                            <input
                                type="text"
                                placeholder="Reason For Cancelation"
                                className="w-full h-15 border border-gray-300 rounded-md px-4 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                            />
                        </div>
                        {/* separator */}
                        <div className="w-full h-px bg-gray-200 mb-4"></div>


                        {/* Buttons */}
                        <div className="flex justify-end space-x-3">
                            <button className="px-5 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition"
                            onClick={()=>{setcancel(false)}}
                            >
                                Confirm Cancel
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <>

                </>
            )}
        </>
    )
}

export default CancelMoldel