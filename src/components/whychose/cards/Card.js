import React from "react";

function Card({ icon, title, content }) {
  return (
    <div className="highlight-off group h-[300px] w-[300px] xs:w-full lg:w-[360px] lg:h-[360px] px-8 py-10 sm:p-[43px] md:cursor-pointer flex flex-col justify-start gap-[37px] rounded-lg shadow-lg bg-white lg:hover:bg-[#fc7e84] lg:hover:ease-out duration-300">
      {/* image */}
      <div className="min-h-[60px] h-[60px] w-[60px] sm:min-h-[75px] sm:h-[75px] sm:w-[75px] flex justify-center items-center text-[50px] bg-[#e8fbfb] text-[#32bead] rounded-full lg:group-hover:bg-[#e6737a] lg:group-hover:text-[#fff8f8]">
        <iconify-icon icon={icon}></iconify-icon>
      </div>
      {/* description */}
      <div className="flex flex-col justify-start gap-[22px] lg:group-hover:text-white">
        <h1 className="text-[18px] sm:text-[22px] lg:text-2xl font-bold tracking-wide w-[236px] h-[25px] sm:w-[274px] sm:h-[30px]">
          {title}
        </h1>
        <p className="text-[14px] sm:text-[17px] text-[#7f7d8a] lg:group-hover:text-white tracking-wide overflow-hidden h-[82px] sm:h-[100px]">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card;
