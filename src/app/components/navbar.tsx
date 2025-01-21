"use client";

// --------------------------------------------------------
export default function Navbar() {
  return (
    <div className="flex w-full mb-5 items-center p-5 space-x-2 bg-main1 shadow-md">
      <span className="text-xl md:text-3xl">watchdog-iot</span>

      <div className="w-[1px] h-full bg-gray-500" />
      <div className="flex flex-col text-gray-500 text-xs">
        <span>Project under development</span>
        <span>by: AWF</span>
      </div>
    </div>
  );
}
