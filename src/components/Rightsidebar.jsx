import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from "../assets/background.jpg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
const Rightsidebar = () => {
      const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
  return (
    <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "w-[16%]" : "w-[4%]"
        } shadow-lg p-5 relative`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Toggle Sidebar Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-10 -left-5 bg-gray-200 text-gray-700 p-2 rounded-md shadow-md">
          {isSidebarOpen ? (
          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          )}
        </button>

        {isSidebarOpen && (
          <div>
            <h2 className="text-xl font-semibold mb-5">Calendar</h2>
            <div>
              <p className="font-bold mb-2">Oct 20, 2021</p>
              <p className="mb-10">10:00 - Facebook Brand</p>
              <p className="mb-10">13:20 - Task Management</p>
            </div>
            <div className="mt-5">
              <p className="font-bold mb-2">Oct 21, 2021</p>
              <p className="mb-10">10:00 - Sleep App</p>
              <p className="mb-10">13:20 - Task Management</p>
              <p className="mb-10">10:00 - Meet Up</p>
            </div>
            <div className="mt-5">
              <p className="font-bold mb-2">Oct 22, 2021</p>
              <p className="mb-10">10:00 - Dribbble Shot</p>
              <p className="mb-10">13:20 - Mobile App</p>
            </div>
          </div>
        )}
      </div>
  );
};

export default Rightsidebar;