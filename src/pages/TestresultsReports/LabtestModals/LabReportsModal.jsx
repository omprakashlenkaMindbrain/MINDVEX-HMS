function LabReportsModal({ setShowModal }) {
  const testData = [
    {
      test: "White Blood Cells (WBC)",
      result: "6.5",
      referenceRange: "4.5 - 11.0 x10³/µL",
      status: "Normal",
    },
    {
      test: "Red Blood Cells (RBC)",
      result: "4.2",
      referenceRange: "3.8 - 5.1 x10⁶/µL",
      status: "Normal",
    },
    {
      test: "Hemoglobin (HGB)",
      result: "13.8",
      referenceRange: "12.0 - 15.5 g/dL",
      status: "Normal",
    },
    {
      test: "Hematocrit (HCT)",
      result: "40.5",
      referenceRange: "36.0 - 46.0 %",
      status: "Normal",
    },
    {
      test: "Platelets",
      result: "185",
      referenceRange: "150 - 450 x10³/µL",
      status: "Normal",
    },
    {
      test: "Mean Corpuscular Volume (MCV)",
      result: "89",
      referenceRange: "80 - 100 fL",
      status: "Normal",
    },
  ];



  function onClose() {
    setShowModal(false);
  }

  return (
    <div className="max-w-4xl bg-white rounded-lg shadow-lg p-8 mx-auto mt-6 font-sans">
      <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-3">
        <h3 className="font-semibold text-lg text-gray-900">Chest X-ray Results</h3>
        <p className="text-xs text-gray-400">
          Last updated: 16 Jun 2023, 11:45 AM
        </p>
      </div>

      <table className="w-full table-fixed border-collapse border border-gray-200 text-left text-sm">
        <thead>
          <tr className="bg-[#6E59D9] text-white">
            <th className="border p-3 w-2/5">Test</th>
            <th className="border p-3 w-1/6 text-center">Result</th>
            <th className="border p-3 w-1/3">Reference Range</th>
            <th className="border p-3 w-1/6">Status</th>
          </tr>
        </thead>
        <tbody>
          {testData.map(({ test, result, referenceRange, status }, idx) => (
            <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="border border-gray-300 p-3">{test}</td>
              <td className="border border-gray-300 p-3 text-center">{result}</td>
              <td className="border border-gray-300 p-3">{referenceRange}</td>
              <td className="border border-gray-300 p-3 text-green-600 font-semibold">{status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6">
        <h4 className="font-semibold text-gray-700 mb-2">Lab Comments:</h4>
        <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-md text-sm">
          All parameters within normal reference ranges. No abnormalities detected
        </div>
      </div>

      <div className="flex justify-end space-x-3 mt-3">
        <button className="px-5 py-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          onClick={onClose}
        >
          Close
        </button>
        <button className="px-5 py-2 px-4 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">
          Download
        </button>
      </div>
    </div>
  );
}

export default LabReportsModal;
