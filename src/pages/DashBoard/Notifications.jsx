import { FiBell } from "react-icons/fi";

function Notifications() {
  const notifications = [
    {
      message: "Appointment with Dr. Sarah Johnson tomorrow at 10:30 AM",
      type: "danger",
    },
    {
      message: "Payment due for consultation on Aug 15, 2025",
      type: "warning",
    },
    {
      message: "New test results available from your recent lab work",
      type: "info",
    },
    {
      message: "Your 4:00 PM appointment with David Miller has been cancelled.",
      type: "danger",
    },
  ];

  const typeStyles = {
    danger: {
      container: "bg-red-100 text-red-600 border border-red-200",
    },
    warning: {
      container: "bg-yellow-100 text-yellow-700 border border-yellow-200",
    },
    info: {
      container: "bg-teal-100 text-teal-600 border border-teal-200",
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      {/* Header */}
      <h2 className="text-lg font-semibold text-gray-800 mb-3">
        Important Notifications
      </h2>

      {/* Notifications list */}
      <div className="space-y-3">
        {notifications.map((note, idx) => {
          const style = typeStyles[note.type];
          return (
            <div
              key={idx}
              className={`flex items-center space-x-2 p-3 rounded-lg ${style.container}`}
            >
              {/* Bell Icon (always visible) */}
              <FiBell size={18} className="flex-shrink-0 mt-0.5" />
              {/* Message */}
              <p className="text-sm">{note.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Notifications;
