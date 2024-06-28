import React from "react";

const JobProfile = () => {
  return (
    <div className="px-24 py-6">
      <div className="flex flex-col">
        <div className="avatar flex gap-4 text-xl items-center text-black">
          <div className="w-8 rounded">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr42lt0uL4-RkQGD5AoUhQGn4OGr-foggxTQ&s"
              alt="Tailwind-CSS-Avatar-component"
            />
          </div>
          Atlassian
        </div>{" "}
        <div className="grid text-sm grid-cols-2 font-medium pt-2 grid-rows-3">
          <div className="flex flex-col gap-2 justify-center py-2">
            <h1 className="text-[#6e6d6d]">Company Size</h1>
            <p>1k-2k Employees</p>
          </div>
          <div className="flex flex-col gap-2 justify-center py-2">
            <h1 className="text-[#6e6d6d]">Type</h1>
            <p>Private</p>
          </div>
          <div className="flex flex-col gap-2 justify-center py-2">
            <h1 className="text-[#6e6d6d]">Sector</h1>
            <p>Information Technology, Infrastructure</p>
          </div>
          <div className="flex flex-col gap-2 justify-center py-2">
            <h1 className="text-[#6e6d6d]">Funding</h1>
            <p>Bootsrapped</p>
          </div>
          <div className="flex flex-col gap-2 justify-center py-2">
            <h1 className="text-[#6e6d6d]">Founded in</h1>
            <p>2019</p>
          </div>
          <div className="flex flex-col gap-2 justify-center py-2">
            <h1 className="text-[#6e6d6d]">Founded By</h1>
            <p>Scott Farquhar, Mike Cannon-Brookes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobProfile;
