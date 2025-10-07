import { useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import CommunicationTabs from "./CommunicationTabs";
import CommuniucationPages from "./CommuniucationPages";



function CommunicationParent() {
    const [sidebarOpen, setSidebarOpen]=useState(false);


    const [catchClickdata, setcatchclickdata]=useState("Messaging");


    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#f9f9fb]">
            {/* Sidebar (Desktop) */}
            <div className="hidden md:block flex-shrink-0 h-screen sticky top-0 overflow-y-auto">
                <Sidebar />
            </div>

            {/* Sidebar (Mobile) */}
            <div
                className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out z-50 md:hidden`}
            >
                <Sidebar />
            </div>

            {/* Overlay when sidebar is open on mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top bar with title + navbar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-6 py-4">
                    {/* Left side: Dashboard text */}
                    <div>
                        <p className="text-sm text-gray-500">Dashboard /</p>
                        <h2 className="text-2xl font-semibold text-gray-800">Commnication</h2>
                    </div>

                    {/* Right side navbar */}
                    <div className="w-full md:w-auto mt-2 md:mt-0">
                        <Navbar />
                    </div>
                </div>

                {/* Page content */}
                <div className="px-4 md:px-6 py-4">
                    <div>
                        <CommunicationTabs onSelect={(data)=>{setcatchclickdata(data)}}/>
                        <CommuniucationPages catchClickdata={catchClickdata}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommunicationParent