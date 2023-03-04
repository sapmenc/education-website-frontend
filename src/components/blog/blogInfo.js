import React from "react";

function BlogInfo() {
  return (
    <div className=" flex flex-col gap-3 py-7 lg:flex-row justify-between lg:px-10  ">
      <div className="px-4 ">
        <h2 className="text-[#39c1b1] text-1xl font-bold tracking-wide">
          Team Member
        </h2>
        <h1 className="text-[30px] md:text-[40px] font-bold">
          Our Latests{" "}
          <span className="text-[#ff7e84] underlined-red relative z-[-1]">
            Blogs
          </span>{" "}
        </h1>
      </div>
      <div className="px-4">
        <div className="tracking-wide w-[180px] h-[53px] bg-[#fc7e84] text-white p-2 flex justify-center items-center rounded-lg cursor-pointer ease-in  duration-200 outline outline-0 hover:outline-offset-2 hover:outline-4 outline-[#fc7e84] font-semibold ">
          Read All Blogs
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
