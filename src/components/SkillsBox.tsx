import React from "react";
import { FaFigma } from "react-icons/fa";
import { SiAdobeillustrator } from "react-icons/si";
import { SiAdobexd } from "react-icons/si";
const SkillsBox = () => {
  return (
    <div className="border-b border-2">
      <div className="flex space-x-20 px-24 py-6 text-[#6e6d6d]">
        <div>
          <h1>Skills Required</h1>
          <div className="text-black text-xs pt-1 flex-col">
            <p className="flex gap-1 w-fit items-center p-1 border-2 rounded-lg">
              <FaFigma />
              Figma
            </p>
          </div>
          <div className="text-black text-xs pt-1 flex-col">
            <p className="flex gap-1 w-fit items-center p-1 border-2 rounded-lg">
              <SiAdobeillustrator />
              Adobe Illustrator
            </p>
          </div>
          <div className="text-black text-xs pt-1 flex-col">
            <p className="flex gap-1 w-fit items-center p-1 border-2 rounded-lg">
              <SiAdobexd /> Adobe XD
            </p>
          </div>
        </div>
        <div>
          <h1>Preferred Language</h1>
          <p className="text-black font-medium pt-1">English</p>
        </div>
        <div>
          <h1>Type</h1>
          <p className="text-black font-medium pt-1">Full Time</p>
        </div>
        <div>
          <h1>Years of Experience</h1>
          <p className="text-black font-medium pt-1">3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsBox;
