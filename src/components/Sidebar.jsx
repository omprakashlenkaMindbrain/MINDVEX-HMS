import { useState } from "react";
import {
  FiCalendar,
  FiChevronLeft,
  FiClipboard,
  FiDollarSign,
  FiFileText,
  FiHome,
  FiMenu,
  FiUser,
  FiUsers
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import logo from "../assets/hmslogo.jpg";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

const links = [
  { icon: <FiHome />, label: "Dashboard", path: "/" },
  { icon: <FiCalendar />, label: "Appointment Management", path: "/appontment-management" },
  { icon: <FiUsers />, label: "Medical Records & History", path: "/medical-records-history" },
  { icon: <FiDollarSign />, label: "Billing & Payment", path: "/billing-payment" },
  { icon: <FiClipboard />, label: "Test Results & Reports", path: "/test-results-reports" },
  { icon: <FiFileText />, label: "Communication", path: "/communication" },
  { icon: <FiUser />, label: "My Profile", path: "/my-profile" },
];
  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden p-3 bg-gray-50 flex">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 rounded-md bg-indigo-50 text-indigo-600 hover:bg-indigo-100 transition"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-white transition-all duration-300 z-50
          ${mobileOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"}
          md:translate-x-0 md:static
          ${collapsed ? "md:w-24" : "md:w-64"}
          flex flex-col
        `}
      >
        {/* Logo + Collapse */}
        <div className="flex items-center justify-between h-20 px-4 border-b border-gray-100 shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-auto object-contain mx-auto transition-all duration-300"
          />
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-2 rounded-md hover:bg-gray-100 text-gray-600 hidden md:block"
          >
            <FiChevronLeft
              size={22}
              className={`${collapsed ? "rotate-180" : ""} transition-transform`}
            />
          </button>
        </div>

        {/* Nav Links (Scrollable Part) */}
        <nav
          className="flex-1 p-2 flex flex-col gap-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
        >
          {links.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-md transition-colors
         ${isActive ? "bg-indigo-100 text-indigo-600 font-semibold" : "hover:bg-gray-100 text-black"}
         ${collapsed ? "justify-center" : "justify-start"}`
              }
              style={{ textDecoration: "none" }}
            >
              <span className="text-xl">{link.icon}</span>
              {(!collapsed || mobileOpen) && <span className="text-sm">{link.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
