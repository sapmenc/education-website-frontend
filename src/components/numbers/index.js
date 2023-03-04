import React from "react";

function Numbers() {
  return (
    <div className="grid grid-cols-1 gap-9 text-center md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 py-10 divide-x divide-dashed md:divide-solid divide-[#e4eeed]">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#30bead] text-5xl font-bold">82K+</h1>
        <h3 className="text-[#0c1327] text-2xl">Enrolled Students</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#30bead] text-5xl font-bold">348+</h1>
        <h3 className="text-[#0c1327] text-2xl">Academic Program</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#30bead] text-5xl font-bold">125+</h1>
        <h3 className="text-[#0c1327] text-2xl">Winning Awards</h3>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[#30bead] text-5xl font-bold">37+</h1>
        <h3 className="text-[#0c1327] text-2xl">Certified Students</h3>
      </div>
    </div>
  );
}

export default Numbers;
