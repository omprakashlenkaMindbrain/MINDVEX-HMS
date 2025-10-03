import { useState } from "react";

function AppointmentTabs({ onSelect }) {
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleClickTabs = (type) => {
    setActiveTab(type);
    onSelect(type);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:space-x-5 space-y-1 sm:space-y-0 py-3 px-3 w-full max-w-md bg-white" style={{borderRadius:"8px"}}>
      {/* Upcoming Appointments Tab */}
      <button
        className={`px-4 py-2 font-semibold transition-colors w-full sm:w-auto text-center ${activeTab === "upcoming"
          ? "bg-blue-50 text-blue-500 rounded-md"
          : "text-gray-900"
          }`}
        onClick={() => handleClickTabs("upcoming")}
      >
        Upcoming Appointments
      </button>

      {/* Past Appointments Tab */}
      <button
        className={`px-4 py-2 font-semibold transition-colors w-full sm:w-auto text-center ${activeTab === "past"
          ? "bg-blue-50 text-blue-500 rounded-md"
          : "text-gray-900"
          }`}
        onClick={() => handleClickTabs("past")}
      >
        Past Appointments
      </button>
    </div>
  );
}

export default AppointmentTabs;
