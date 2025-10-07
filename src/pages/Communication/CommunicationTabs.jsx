import { useState } from "react";

function CommunicationTabs({ onSelect }) {


    const [activeTab, setActiveTab] = useState("Messaging");


    function handleClickTabs(type) {
        setActiveTab(type);
        onSelect(type);
    }
    return (
        <div className="bg-white rounded-lg shadow-sm w-full max-w-100 p-4 flex flex-row gap-2 items-start">
            <button
                className={`w-full text-left px-4 py-2 font-semibold rounded-md transition
          ${activeTab === "Messaging"
                        ? "bg-blue-50 text-blue-600 shadow"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                onClick={() => handleClickTabs("Messaging")}
            >
                Messaging
            </button>
            <button
                className={`w-full text-left px-4 py-2 font-semibold rounded-md transition
          ${activeTab === "Notifications"
                        ? "bg-blue-50 text-blue-600 shadow"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                onClick={() => handleClickTabs("Notifications")}
            >
                Notifications
            </button>
        </div>
    )
}

export default CommunicationTabs