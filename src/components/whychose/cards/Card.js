import Image from "next/image";
import React from "react";

function Card({ icon, title, content }) {
  return (
    <div className="group h-[360px] w-[360px] p-[43px] md:cursor-pointer flex flex-col justify-start gap-[37px] rounded-lg shadow-lg hover:md:bg-[#fc7e84] hover:ease-out duration-300">
      {/* image */}
      <div className="h-[75px] w-[75px] flex justify-center items-center text-[50px] bg-[#e8fbfb] text-[#32bead] rounded-full group-hover:md:bg-[#e6737a] group-hover:md:text-[#fff8f8]">
        <iconify-icon icon={icon}></iconify-icon>
      </div>
      {/* description */}
      <div className="flex flex-col justify-start gap-[27px] group-hover:md:text-white ">
        <h1 className="text-[22px] lg:text-2xl font-bold tracking-wide">
          {title}
        </h1>
        <p className="text-[17px] text-[#7f7d8a] group-hover:md:text-white tracking-wide ">
          {content}
        </p>
      </div>
    </div>
  );
}

export default Card;
