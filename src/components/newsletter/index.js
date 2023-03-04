import React from "react";
import Image from "next/image";
import { EnvelopeIcon } from "/node_modules/@heroicons/react/24/outline/index.js";
function Newsletter() {
  return (
    <div className="bg-[#30bead]  ">
      <div className="md:flex flex-row justify-between px-5">
        <div className="flex justify-center gap-10 px-10 py-5">
          <Image
            src="https://bestwpware.com/react-templates/edumim/static/media/big-mail.a644844b6b44c293b10af0d68fbc0ae7.svg"
            alt=""
            height={50}
            width={50}
          />
          <h1 className="text-white font-bold text-2xl">
            Subscribe <br />
            To My Newsletter
          </h1>
        </div>
        <div className="mt-5 flex flex-col md:flex-row bg-[#30bead] items-center p-3 rounded-xl gap-5">
          <div className="w-full flex items-center gap-3 px-2">
            <div className="h-7 w-7 text-white">
              <EnvelopeIcon className="text-6xl" />
            </div>
            <input
              email="text"
              className="bg-[#30bead] p-2 w-full outline-none border-none placeholder-shown:tracking-wide placeholder:text-white text-white"
              placeholder="Enter your mail"
            />
          </div>
        </div>
        <div className="py-10">
          <button className="tracking-wide w-full md:w-auto md:min-w-[175px] h-[52px] p-2 bg-white text-[#30bead] px-10">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
