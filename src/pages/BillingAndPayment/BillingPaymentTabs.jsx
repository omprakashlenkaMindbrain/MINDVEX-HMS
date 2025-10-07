import { useState } from "react";

function BillingPaymentTabs({ onselect }) {
  const [activeTab, setActiveTab] = useState("currentbills");

  function handleClickTabs(types) {
    setActiveTab(types);
    onselect(types);
  }

  return (
    <div className="bg-white rounded-lg shadow-sm w-full max-w-100 p-4 flex flex-row gap-2 items-start">
      <button
        className={`w-full text-left px-4 py-2 font-semibold rounded-md transition
          ${activeTab === "currentbills"
            ? "bg-blue-50 text-blue-600 shadow"
            : "text-gray-900 hover:bg-gray-50"
          }`}
        onClick={() => handleClickTabs("currentbills")}
      >
        Current Bills
      </button>
      <button
        className={`w-full text-left px-4 py-2 font-semibold rounded-md transition
          ${activeTab === "paymenthistory"
            ? "bg-blue-50 text-blue-600 shadow"
            : "text-gray-900 hover:bg-gray-50"
          }`}
        onClick={() => handleClickTabs("paymenthistory")}
      >
        Payment History
      </button>
    </div>
  );
}

export default BillingPaymentTabs;
