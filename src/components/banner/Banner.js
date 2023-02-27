import React from "react";
import { useState } from "react";

function Banner() {
  const [text, setText] = useState("Enter your email");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="py-32 px-32 bg-[#e8f8f6]">
      <div className="flex flex-row space-x-12">
        <div className="basis-1/2">
          <span className="text-5xl font-bold text-[#0c1327]">Explore,</span>

          <span className="text-[#30bead] text-5xl font-bold">discover,</span>
          <br />
          <div className="pt-1"></div>
          <span className="text-[#0c1327] text-5xl font-bold">
            ignite curiosity
          </span>
          <div className="pt-4">
            <span className="text-[#7b7b8a]">
              Explore the Fascinating World of Physics and give your child the
              gift of curiosity.
            </span>
            <div className="pt-4"></div>
            <button className="p-4 rounded text-white font-bold bg-[#ff7e84]">
              Get Started
            </button>

            <label className=" hover: p-4 pr-20 rounded text-gray-500 font-bold bg-white">
              <input type="text" value={text} onChange={handleChange} />
            </label>
          </div>
        </div>
        <div className="basis-1/2 pt-0 pb-5">
          <img
            className="bg-[#ffd1c9] rounded-xl"
            src="https://bestwpware.com/react-templates/edumim/static/media/man1.5f992e1f22cd54990ca0.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
