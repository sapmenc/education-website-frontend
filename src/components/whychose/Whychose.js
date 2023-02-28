import React from "react";

function Whychose() {
  return (
    <div className="text-center flex flex-col gap-3">
      <div>
        <h2 className="text-[#39c1b1] text-1xl font-bold tracking-wide">
          Curious Features
        </h2>
      </div>
      <div>
        <h1 className="text-[30px] md:text-[40px] font-bold">
          Why{" "}
          <span className="text-[#ff7e84] underlined-red relative z-[-1]">
            Choose
          </span>{" "}
          Us
        </h1>
      </div>
    </div>
  );
}

export default Whychose;
