import { FiBell, FiInfo, FiMoon, FiSearch } from "react-icons/fi";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 shadow-sm" style={{borderRadius:"60px"}}>
      {/* Search bar */}
      <div className="flex items-center bg-gray-100 px-3 py-2 rounded-full w-64">
        <FiSearch className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      {/* Right side icons */}
      <div className="flex items-center space-x-3" style={{marginLeft:"10px"}}>
        <FiBell className="text-gray-600 cursor-pointer" size={20} />
        <FiMoon className="text-gray-600 cursor-pointer" size={20} />
        <FiInfo className="text-gray-600 cursor-pointer" size={20} />
        <img
          src="https://th.bing.com/th/id/OIP.EwG6x9w6RngqsKrPJYxULAHaHa?w=196&h=196&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" // replace with profile image
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Navbar;
