import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { TbCoins } from "react-icons/tb";
import SkillsBox from "@/components/SkillsBox";
import About from "@/components/About";
import JobProfile from "@/components/JobProfile";
import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { LuPencil } from "react-icons/lu";
import { LuMessageSquare } from "react-icons/lu";
import { FiEye } from "react-icons/fi";
const ContentBox = () => {
  return (
    <div className="grid grid-cols-12 grid-clow-col">
      <div className="col-span-9 info-box flex-col items-center gap-4 border-r-2 ">
        <div className="flex flex-col px-24 py-8 gap-4 border-b w-full">
          <div className="flex gap-4 items-center">
            <h1 className="text-4xl font-medium">Senior Product Manager</h1>
            <li className="text-[#888888]">posted 2 days ago</li>
            <div className="badge text-[#067547] border-[#aaf0c6] relative flex bg-[#ebfcf2]">
              <p className="relative w-2 rounded-full aspect-square right-1 bg-[#17b36a]" />
              Open
            </div>
          </div>
          <div className="flex gap-3 text-xl pt-2 text-medium text-[#5c5c5c] items-center">
            <SlLocationPin /> Delaware, USA
            <div className="text-[#5c5c5c] flex items-center gap-2">
              <p className="w-1 rounded-full aspect-square bg-[#5c5c5c]" />
              <TbCoins />
              $300k-$400k
            </div>
          </div>
        </div>
        <SkillsBox />
        <About />
        <JobProfile />
      </div>
      <div className="col-span-3 py-6 px-8">
        <div className="flex gap-2 w-full px-4 justify-center font-medium">
          <Button className="text-[#db492c] gap-2 h-12 border-[#db492c] border-[1px] rounded-lg px-6  bg-[#fff4f2]">
            <RiDeleteBin6Line />
            Delete job
          </Button>
          <Button className="text-white bg-[#db492c] border-[#fff4f2] border-[1px] px-8 h-12 rounded-lg">
            <LuPencil />
            Edit job
          </Button>
        </div>
        <div className="grid-rows-4 gap-4 text-lg text-[#4f4f4f] py-4 px-6">
          <div className="flex items-center justify-between py-4 border-b">
            <h1 className="flex gap-2 items-center">
              <GoPeople />
              Applicants
            </h1>
            <p className="font-semibold">400</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b">
            <h1 className="flex gap-2 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12.9167H6.25002C5.08705 12.9167 4.50557 12.9167 4.0324 13.0602C2.96707 13.3834 2.13339 14.217 1.81022 15.2824C1.66669 15.7555 1.66669 16.337 1.66669 17.5M13.3334 15L15 16.6667L18.3334 13.3333M12.0834 6.25C12.0834 8.32107 10.4044 10 8.33335 10C6.26229 10 4.58335 8.32107 4.58335 6.25C4.58335 4.17893 6.26229 2.5 8.33335 2.5C10.4044 2.5 12.0834 4.17893 12.0834 6.25Z"
                  stroke="#4F4F4F"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Matches
            </h1>
            <p className="font-semibold">100</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b">
            <h1 className="flex gap-2 items-center">
              <LuMessageSquare />
              Messages
            </h1>
            <p className="font-semibold">147</p>
          </div>
          <div className="flex items-center justify-between py-4 border-b">
            <h1 className="flex gap-2 items-center">
              <FiEye />
              Views
            </h1>
            <p className="font-semibold">800</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentBox;
