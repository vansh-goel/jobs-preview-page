import React from "react";

function OptionsBar() {
  return (
    <div className="flex flex-row space-x-16 pt-4 px-20 border-2 font-medium items-center text-xl">
      <div className="text-[#DC4A2D] font-semibold flex flex-col items-center gap-4 text-xl">
        <h1 className="">Job Preview</h1>
        <hr className="border-[#DC4A2D] border-2 w-[50%]" />
      </div>
      <div className="text-[#888888] pb-4">Applicants</div>
      <div className="text-[#888888] pb-4">Match</div>
      <div className="text-[#888888] pb-4">Messages</div>
    </div>
  );
}

export default OptionsBar;
