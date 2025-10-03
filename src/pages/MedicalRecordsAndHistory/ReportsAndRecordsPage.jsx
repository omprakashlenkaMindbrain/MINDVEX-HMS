import { FaDownload } from "react-icons/fa";

function ReportsAndRecordsPage() {
  const medicalHistory = [
    {
      title: "Annual Checkup",
      doctor: "Dr. Sarah Johnson – Primary Care Physician",
      date: "12 June 2023",
      notes:
        "Routine annual examination. All vitals normal. Recommended maintaining current diet and exercise regimen.",
      status: "completed",
    },
    {
      title: "Dermatology Consultation",
      doctor: "Dr. Michael Chen – Dermatologist",
      date: "12 June 2023",
      notes:
        "Routine annual examination. All vitals normal. Recommended maintaining current diet and exercise regimen.",
      status: "completed",
    },
    {
      title: "Follow-up Visit",
      doctor: "Dr. Sarah Johnson – Primary Care Physician",
      date: "12 June 2023",
      notes:
        "Routine annual examination. All vitals normal. Recommended maintaining current diet and exercise regimen.",
      status: "completed",
    },
  ];

  const prescriptionHistory = [
    {
      name: "Atorvastatin",
      details: "20mg tablet • Once daily • 30 tablets",
      prescribedBy: "Dr. Sarah Johnson",
      date: "October 15, 2023",
      notes: "For cholesterol management. Take with evening meal.",
      status: "active",
    },
    {
      name: "Amoxicillin",
      details: "500mg capsule • Three times daily • 21 capsules",
      prescribedBy: "Dr. Emily Wong",
      date: "February 10, 2023",
      notes: "For sinus infection. Take until finished.",
      status: "completed",
    },
  ];

  const downloadReports = [
    { name: "Latest Blood Test Results", date: "October 16, 2023", size: "250 KB", url: "#" },
    { name: "Blood Test Results.pdf", date: "October 25, 2023", size: "250 KB", url: "#" },
    { name: "Discharge Summary.pdf", date: "October 16, 2023", size: "250 KB", url: "#" },
    { name: "Prescription_10-15-2023.pdf", date: "October 16, 2023", size: "250 KB", url: "#" },
    { name: "Radiology Reports", date: "October 16, 2023", size: "250 KB", url: "#" },
    { name: "Current Prescriptions", date: "October 16, 2023", size: "250 KB", url: "#" },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-screen flex flex-col lg:flex-row gap-6">
      {/* Left Column */}
      <div className="flex-1 flex flex-col gap-6">
        {/* Medical History */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
          <h2 className="text-blue-900 text-base font-medium mb-4 border-b border-gray-200 pb-2">
            Medical History
          </h2>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] pr-2">
            {medicalHistory.map((item, index) => (
              <div key={index} className="border-l-3 border-blue-300 pl-4 py-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm text-gray-800">{item.title}</h3>
                  <span
                    className={`text-xs font-semibold uppercase rounded px-2 py-1 ${
                      item.status === "completed"
                        ? "text-green-600 bg-green-100"
                        : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <p className="text-gray-800 text-sm">{item.doctor}</p>
                <p className="text-gray-400 text-xs">{item.date}</p>
                <p className="text-gray-700 mt-1 text-sm">{item.notes}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Prescription History */}
        <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col">
          <h2 className="text-blue-900 text-base font-medium mb-4 border-b border-gray-200 pb-2">
            Prescription History
          </h2>
          <div className="flex flex-col gap-4 overflow-y-auto max-h-[280px] pr-2">
            {prescriptionHistory.map((item, index) => (
              <div key={index} className="border-l-3 border-indigo-300 pl-4 py-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-sm text-gray-800">{item.name}</h3>
                  <span
                    className={`text-xs font-semibold rounded px-2 py-1 uppercase ${
                      item.status === "active"
                        ? "text-purple-600 bg-purple-100"
                        : "text-green-600 bg-green-100"
                    }`}
                  >
                    {item.status === "active" ? "Active" : "Completed"}
                  </span>
                </div>
                <p className="text-gray-800 text-sm">{item.details}</p>
                <p className="text-gray-400 text-xs font-normal">
                  Prescribed by {item.prescribedBy} on {item.date}
                </p>
                <p className="text-gray-700 mt-1 text-sm">{item.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column - Download Reports */}
      <div className="w-full h-100 lg:w-80 flex-shrink-0 bg-white rounded-lg shadow-sm p-3 flex flex-col">
        <h2 className="text-blue-900 text-base font-medium mb-4 border-b border-gray-200 pb-2">
          Download Reports
        </h2>
        <div className="flex flex-col gap-3 overflow-y-auto max-h-[600px] pr-1">
          {downloadReports.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center border border-gray-200 rounded-md p-2 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-2">
                <a href={item.url} download aria-label={`Download ${item.name}`} title={item.name}>
                  <img src="https://th.bing.com/th/id/OIP.EtFemv4lu9rG7Kix3hvaMAHaHa?w=192&h=192&c=7&r=0&o=7&cb=12&dpr=1.3&pid=1.7&rm=3" alt="PDF Icon" className="w-6 h-6" />
                </a>
                <div>
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-400">
                    {item.date} • {item.size}
                  </p>
                </div>
              </div>
              <a
                href={item.url}
                download
                className="text-blue-500 hover:text-blue-600"
                aria-label={`Download ${item.name}`}
              >
                <FaDownload />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReportsAndRecordsPage;
