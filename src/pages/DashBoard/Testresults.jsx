function Testresults() {
  const results = [
    {
      test: "Complete Blood Count",
      doctor: "Dr. Sarah Johnson",
      date: "2025-08-20",
      status: "Normal",
    },
    {
      test: "Lipid Panel",
      doctor: "Dr. Michael Chen",
      date: "2025-08-18",
      status: "Abnormal",
    },
    {
      test: "Chest X-Ray",
      doctor: "Dr. Emily Rodriguez",
      date: "2025-08-15",
      status: "Normal",
    },
  ];

  const statusColors = {
    Normal: "bg-green-100 text-green-600",
    Abnormal: "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mt-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Test Results
        </h2>
        <button className="text-sm bg-[#dcd8eb] px-4 py-1.5" style={{borderRadius:"5px", color:"#6E59D9"}}>
          View All
        </button>
      </div>

      {/* Results List */}
      <div className="space-y-3">
        {results.map((result, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-3 rounded-lg border border-gray-200 bg-gray-50 hover:shadow transition"
          >
            {/* Left side: Info */}
            <div>
              <p className="font-medium text-gray-800">{result.test}</p>
              <p className="text-sm text-gray-500">By {result.doctor}</p>
              <p className="text-xs text-gray-400">{result.date}</p>
            </div>

            {/* Right side: Status */}
            <span
              className={`text-xs px-3 py-1 font-medium ${statusColors[result.status]}`}
              style={{borderRadius:"4px"}}
            >
              {result.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testresults;
