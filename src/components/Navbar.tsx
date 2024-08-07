import React from "react";
import { FiBriefcase } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import { PiHandCoins } from "react-icons/pi";
import { PiBellSimple } from "react-icons/pi";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div className="flex font-sans justify-between items-center py-2 border-b border-2 pb-4 px-8">
      <h1 className="text-xl text-[#db492c] font-medium py-3 px-4 bg-[#e8e8e8]">
        Logo
      </h1>
      <div className="flex flex-row space-x-12 py-2 px-3 border-[0.5px] font-medium items-center text-md rounded-full">
        <p className="p-3 bg-[#DC4A2D] border-[3px] text-white rounded-full items-center flex gap-2 border-[#FCB4A5]">
          <FiBriefcase className="text-2xl" /> Jobs
        </p>
        <div className="text-[#B0B0B0] font-medium flex items-center gap-1">
          <div className="flex items-center">
            <LuMessageSquare className="text-2xl relative" />
            <p className="relative w-2 rounded-full aspect-square right-2 -top-2 bg-[#DC4A2D]" />
          </div>
          Messages
        </div>
        <p className="text-[#B0B0B0] font-medium flex items-center gap-2">
          <PiHandCoins className="text-2xl" /> Payments
        </p>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="flex items-center">
          <PiBellSimple className="text-xl relative text-black" />
          <p className="relative w-2 rounded-full aspect-square right-2 -top-2 bg-[#DC4A2D]" />
        </div>
        <div className="avatar">
          <div className="w-8 rounded-full">
            <img src="https://static-00.iconduck.com/assets.00/atlassian-icon-2048x2048-bn41pv87.png" />
          </div>
        </div>
        <MdKeyboardArrowDown className="text-2xl" />
      </div>
    </div>
  );
}

export default Navbar;
