function Appointments() {
  const appointments = [
    {
      name: "Sarah Johnson",
      department: "Cardiology - Room 203",
      date: "2025-08-26 at 10:30 AM",
      status: "confirmed",
    },
    {
      name: "Michael Chen",
      department: "Dermatology - Room 115",
      date: "2025-08-26 at 10:30 AM",
      status: "pending",
    },
    {
      name: "Sarah Johnson",
      department: "Internal Medicine - Room 301",
      date: "2025-08-26 at 10:30 AM",
      status: "confirmed",
    },
  ];

  const statusColors = {
    confirmed: "bg-green-100 text-green-600",
    pending: "bg-yellow-100 text-yellow-600",
    cancelled: "bg-red-100 text-red-600",
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-lg font-semibold text-gray-800">
          Upcoming Appointments
        </h2>
        <button className="text-sm bg-[#dcd8eb] px-4 py-1.5" style={{borderRadius:"5px", color:"#6E59D9"}}>
          View All
        </button>

      </div>

      {/* Appointment List */}
      <div className="space-y-3">
        {appointments.map((appt, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center p-3 rounded-lg border border-gray-200 bg-gray-50 hover:shadow transition"
          >
            {/* Left side: Info */}
            <div>
              <p className="font-medium text-gray-800">{appt.name}</p>
              <p className="text-sm text-gray-500">{appt.department}</p>
              <p className="text-xs text-gray-400">{appt.date}</p>
            </div>

            {/* Right side: Status */}
            <span
              className={`text-xs px-3 py-1 font-medium ${statusColors[appt.status]}`}
              style={{borderRadius:"4px"}}
            >
              {appt.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointments;
