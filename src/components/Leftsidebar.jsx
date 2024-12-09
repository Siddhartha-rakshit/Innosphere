import React from 'react';
import pfp from "../assets/pfp.jpeg";
import { BoxIcon, ChartArea, ChartBar, LogOutIcon, Settings, Settings2 } from 'lucide-react';
import { BiSearch, BiTask } from 'react-icons/bi';
function Leftsidebar() {
  return (
    <div className="w-64 p-4 h-full">
            {/*<div className="w-64 p-4 fixed h-full"style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover', // Cover full area
              backgroundPosition: 'center', // Center align the image
              backgroundRepeat: 'no-repeat', // Prevent tiling
              }}>*/}
              {/* left bar color */}
          <div className="flex flex-col items-center mb-5 mt-3">
            <img src={pfp} alt="Logo" className="w-20 h-20 mb-10 rounded shadow-huge"/> {/* Adjust logo size as needed */}
          </div>
          <div className="flex flex-col items-center mb-5 mt-30">{/*flex enables Flexbox, flex col align them in coloumb */}
            <img src={pfp} alt="Profile" className="w-20 h-20 mb-4 rounded-full shadow-huge"/>
                <div className="ml-3 text-center">
                    <h2 className="text-xl font-semibold">Siddharth</h2>
                    <p className="text-black">Sid@gmail.com</p>
                </div>
          </div>
          <nav className="flex flex-col items-center">
            <ul className="w-48 flex flex-col items-start">
              <li className="py-2 w-full ">
                <a href="#" className=" flex items-center gap-3 pl-10 text-gray-600 hover:text-black">
                  <ChartArea className="text-black"/> Dashboard
                </a>
              </li>
              <li className="py-2 w-full flex justify-center">
                <a href="#" className=" flex items-center gap-3 pr-3 text-gray-600 hover:text-black">
                  <ChartBar className="text-black"/> Analytics
                </a>
              </li>
              <li className="py-2 w-full flex justify-center">
                <a href="#" className=" flex items-center gap-3 pr-5 text-gray-600 hover:text-black">
                  <BiTask className="text-black"/> Task List
                </a>
              </li>
              <li className="py-2 w-full flex justify-center">
                <a href="#" className=" flex items-center gap-3 pr-5 text-gray-600 hover:text-black">
                  <BoxIcon className="text-black"/> Tracking
                </a>
              </li>
              <li className="py-2 w-full flex justify-center">
                <a href="#" className=" flex items-center gap-3 pr-5 text-gray-600 hover:text-black">
                  <Settings2 className="text-black"/> Settings
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center mt-10">
            <button className="text-black flex items-center gap-2 mt-24">
              <LogOutIcon className="text-black"/>
            </button>
          </div>
        </div>
  );
}

export default Leftsidebar;