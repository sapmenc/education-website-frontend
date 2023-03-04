import React from "react";

function CourseInfo() {
  return (
    <div className="text-center flex flex-col gap-3 py-7 ">
      <div>
        <h2 className="text-[#39c1b1] text-1xl font-bold tracking-wide">
          Popular Courses
        </h2>
      </div>
      <div>
        <h1 className="text-[30px] md:text-[40px] font-bold">
          Choose our top{" "}
          <span className="text-[#ff7e84] underlined-red relative z-[-1]">
            Courses
          </span>{" "}
        </h1>
      </div>
    </div>
  );
}

export default CourseInfo;
