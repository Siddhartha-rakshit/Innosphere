import { BoxIcon, ChartArea, ChartBar, LogOutIcon, Settings, Settings2 } from 'lucide-react';
import React, { useState } from 'react';
import { BiSearch, BiTask } from 'react-icons/bi'; // BiSearch is from the Bootstrap Icons
import { HiOutlineEllipsisVertical } from 'react-icons/hi2'; // EllipsisVertical is from the Hero Icons
import backgroundImage from "../assets/background.jpg";
import backgroundImage1 from '../assets/background1.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';
import bg5 from '../assets/bg5.jpg';
import { motion } from "framer-motion";
import pfp from "../assets/pfp.jpeg";
import grad from '../assets/grad.jpg';
import grad2 from '../assets/grad2.jpg';
import grad3 from '../assets/grad3.jpg';
import grad4 from '../assets/grad4.jpg';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import BarChart from '../components/BarChart';
import { useNavigate } from 'react-router-dom';
import Leftsidebar from './Leftsidebar';
import Rightsidebar from './Rightsidebar';



const Dashboard = () => {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false); // To track button expansion
  const [inputValue, setInputValue] = useState(""); // To handle input value  
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); 
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  
    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
      
    };
    return (
        //<div className="flex h-screen"style={{ backgroundColor: '	#FFFFFF' }}>
        <div className="flex w-full"
  style={{
    backgroundImage: `url(${grad4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>{/* middle screen color */}
            {/* Left Sidebar */}
        <Leftsidebar/>

            {/* Vertical Divider */}
            {/*<div className="border-l border-black h-full"></div> */}

            {/* Center Content */}
            <div className="flex-1 p-5 ml-4">
          {/*  <div className="flex-1 ml-64 p-5" style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Cover full area
    backgroundPosition: 'center', // Center align the image
    backgroundRepeat: 'no-repeat', // Prevent tiling
  }}>*/}{/*old code- flex-grow bg-gray-50 p-5 */}
            
            <div className="border-l border-gray-300 h-[90%] absolute left-64 top-5 bottom-5"></div>
{/*added the border here coz above one is not working */}
                <div className="flex justify-between mb-5">{/*black border old code,<div className="border-l border-black h-full absolute left-64 top-0"></div*/}
                <div>
                    <h1 className="text-2xl font-bold">Hello, Sid</h1>{/*adding div helped h3 to take it second line,mt-1 added a space between them */}
                    <h3 className="text-sm font-semibold mt-1">Today is Monday, 20 October 2021</h3>
                </div>
                <div className="flex items-center space-x-4 relative p-4">{/*added the p4 to make the gap between the left button and sidebar */}
                <div className="flex items-center space-x-4 relative p-1">
    {/* Expandable Search Button */}
    <motion.div 
      className="flex items-center" 
      initial={{ width: "40px" }} 
      animate={{ width: isExpanded ? "250px" : "40px" }} 
      transition={{ duration: 0.3 }}
    >
      <button
        className="p-3 bg-gray-200 rounded-l"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <BiSearch className="h-5 w-5 text-gray-500" />
      </button>
      {isExpanded && (
        <input
          type="text"
          className="p-2 bg-gray-100 rounded-r focus:outline-none"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </motion.div>
  </div>
                <button
              onClick={toggleDropdown}
              className="bg-black text-white px-3 py-2 rounded flex items-center ml-10">
              Add New ..{/*added this svg for the dropdown logo */}
              <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4 ml-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
            </button>

{/* Dropdown Menu */}
{dropdownOpen && (
  <div className="absolute top-16 right-0 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
    <ul className="py-1">
    <li
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate('/idea')}
        >
          Idea
        </li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Patents</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Publications</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">startup</li>
      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Achivements</li>
    </ul>
  </div>
)}
</div>
                </div>


                <div className="grid grid-cols-4 gap-4 mb-5">
                    {/*<div className="bg-purple-600 shadow-2xl text-white p-5 rounded-lg relative w-60 h-60"> */}{/* old code without animation */}
                    <motion.div 
        className="bg-purple-600 shadow-2xl text-white p-5 rounded-lg relative w-60 h-60"
        whileHover={{ scale: 1.05 }} // Hover animation to slightly enlarge
        whileTap={{ scale: 0.95 }}   // Tap animation to slightly shrink
      >
                        <span className="absolute top-2 bg-white text-purple-600 px-2 py-1 rounded-full">+7</span>
                        <HiOutlineEllipsisVertical className=" absolute top-2 right-2 h-5 w-5 text-white" />{/* added this for settings file logo , top and right 2 absolute */}
                        <h3 className="text-2xl font-bold mb-4 mt-6">Web Development</h3>{/* className="text-2xl font-bold mb-4 added this to make it bold and put gap between the col */}
                        <p className='mt-20'>10 tasks | 96%</p>{/* converted p to class and added mt-20 to take it to the bottom */}
                        <div className="bg-gray-500 h-2 rounded-full">
                        <div className="bg-white h-2 rounded-full" style={{ width: '96%' }}></div>
                        </div>
                        </motion.div>
                        <motion.div  className="bg-teal-400 shadow-2xl  text-white p-5 rounded-lg relative w-60 h-60"
                    whileHover={{ scale: 1.05 }} // Hover animation to slightly enlarge
                    whileTap={{ scale: 0.95 }}   // Tap animation to slightly shrink
                    >
                    <HiOutlineEllipsisVertical className=" absolute top-2 right-2 h-5 w-5 text-white" />
                        <span className="absolute top-2 bg-white text-teal-400 px-2 py-1 rounded-full">+9</span>
                        <h3 className="text-2xl font-bold mb-4 mt-6">Mobile App Design</h3>
                        <p className='mt-20'>12 tasks | 46%</p>
                        <div className="bg-gray-500 h-2 rounded-full">
                            <div className="bg-white h-2 rounded-full" style={{ width: '46%' }}></div>{/* adding this for percentage moving bar, old code div className="bg-white h-2 rounded-full w-73" */}
                        </div>
                    </motion.div>
                    
                    <motion.div  className="bg-emerald-500 shadow-2xl  text-white p-5 rounded-lg relative w-60 h-60"
                    whileHover={{ scale: 1.05 }} // Hover animation to slightly enlarge
                    whileTap={{ scale: 0.95 }}   // Tap animation to slightly shrink
                    >
                    <HiOutlineEllipsisVertical className=" absolute top-2 right-2 h-5 w-5 text-white" />
                        <span className="absolute top-2 bg-white text-teal-400 px-2 py-1 rounded-full">+9</span>
                        <h3 className="text-2xl font-bold mb-4 mt-6">React js </h3>
                        <p className='mt-28'>12 tasks | 20%</p>
                        <div className="bg-gray-500 h-2 rounded-full">
                            <div className="bg-white h-2 rounded-full" style={{ width: '20%' }}></div>{/* adding this for percentage moving bar, old code div className="bg-white h-2 rounded-full w-73" */}
                        </div>
                    </motion.div>
                    <motion.div className="bg-orange-500 shadow-2xl text-white p-5 rounded-lg relative w-60 h-60" whileHover={{ scale: 1.05 }} // Hover animation to slightly enlarge
                    whileTap={{ scale: 0.95 }}>
                    <HiOutlineEllipsisVertical className=" absolute top-2 right-2 h-5 w-5 text-white" />
                        <span className="absolute top-2 bg-white text-orange-500 px-2 py-1 rounded-full">+3</span>
                        <h3 className="text-2xl font-bold mb-28 mt-8">Teams</h3>
                        <p className='mt-20'>22 tasks | 73%</p>
                        <div className="bg-gray-500 h-2 rounded-full">
                            <div className="bg-white h-2 rounded-full" style={{ width: '73%' }}></div>
                        </div>
                    </motion.div>
                </div>
                <div className="flex mb-5 ">
      
                    <div className="flex flex-col w-1/2 pr-1  "> {/* Left half */}{/* change pr to increase the gap between left and right part */}
                    <h2 className="text-xl font-bold mb-1"></h2>
      {/* Include the bar chart */}
      <BarChart />
    </div>
                     {/*   <h2 className="text-l font-semibold mb-3">Tasks for today</h2>
                        <motion.div className="bg-white shadow-xl p-5 mb-5 rounded-lg h-20" whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}>
                        <h3 className="text-xl font-semibold mb-1">Mobile App</h3>
                        <p>Prepare Figma file</p>
                        </motion.div>
                    <motion.div className="bg-white shadow-xl p-5 mb-5 rounded-lg h-20" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <h3 className="text-l font-semibold mb-1">UX wireframes</h3>
                        <p>Design UX wireframes</p>
                    </motion.div>
                    <motion.div className="bg-white shadow-xl p-5 mb-5 rounded-lg h-20"  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <h3 className="text-l font-semibold mb-1">Mobile App</h3>
                        <p>Research</p>
                    </motion.div>
                </div>*/} 

                <div className="flex flex-col w-1/2"> {/* Right half */}
                <h2 className="text-xl font-semibold mb-3">Statistics</h2>
                <div className="grid grid-cols-3 gap-y-6 gap-x-0"> {/* old code-for top bottom layout(flex flex-col gap-4)(make stack), grid grid-cols-2 gap-4(to make side by side)*/}
                    <motion.div className="bg-gray-200 p-5 rounded-lg shadow-xl w-32 h-32 flex justify-start items-start flex-col" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{/* added this to aling center flex justify-center items-center flex-col */}
                        <h3 className="text-2xl font-bold mb-1 text-left">28 h</h3>
                        <p>Tracked time</p>
                    </motion.div>
                <motion.div className="bg-gray-200 p-5 rounded-lg shadow-xl w-32 h-32 flex justify-start items-start flex-col" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <h3 className="text-2xl font-bold mb-1 text-left">20 h</h3>
                    <p>Finished tasks</p>
                    </motion.div>
                    <motion.div className="bg-gray-200 p-5 rounded-lg shadow-xl w-32 h-32 flex justify-start items-start flex-col" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <h3 className="text-2xl font-bold mb-1 text-left">21 h</h3>
                    <p>Finished tasks</p>
                    </motion.div>
                    <motion.div className="bg-gray-200 p-5 rounded-lg shadow-xl w-32 h-32 flex justify-start items-start flex-col" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{/* added this to aling center flex justify-center items-center flex-col */}
                        <h3 className="text-2xl font-bold mb-1 text-left">28 h</h3>
                        <p>Tracked time</p>
                    </motion.div>
                <motion.div className="bg-gray-200 p-5 rounded-lg shadow-xl w-32 h-32 flex justify-start items-start flex-col" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <h3 className="text-2xl font-bold mb-1 text-left">18 h</h3>
                    <p>Finished tasks</p>
                    </motion.div>
                    <motion.div className="bg-gray-200 p-5 rounded-lg shadow-xl w-32 h-32 flex justify-start items-start flex-col" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <h3 className="text-2xl font-bold mb-1 text-left">9 h</h3>
                    <p>Finished tasks</p>
                    </motion.div>
                
                </div>
    </div>
</div>

            </div>

            {/* Vertical Divider 
            <div className="relative h-[90%] mx-4 w-[1px]">
            <div className="border-l border-gray-300 h-full absolute left-0 top-2 bottom-2"></div>
            <div className="absolute left-[-1px] top-0 bg-gray-300 w-2 h-2 rounded-full"></div>
            <div className="absolute left-[-1px] bottom-0 bg-gray-300 w-2 h-2 rounded-full"></div>
            </div>*/}

            {/* Right Sidebar */}
      <Rightsidebar/>
    </div>
    );
};

export default Dashboard;