import React from "react";

function BlogInfo() {
  return (
    <div className=" flex flex-col gap-3 py-7 ">
      <div className="px-4">
        <h2 className="text-[#39c1b1] text-1xl font-bold tracking-wide">
          Team Member
        </h2>
      </div>
      <div className="px-4">
        <h1 className="text-[30px] md:text-[40px] font-bold">
          Our Latests{" "}
          <span className="text-[#ff7e84] underlined-red relative z-[-1]">
            Blogs
          </span>{" "}
        </h1>
        <div className="py-5">
          <button className="px-5 py-3 rounded-tl-lg bg-[#ff7e84] text-white">
            Read All Blogs
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
