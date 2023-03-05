import {
  newsletter_mail_icon,
  newsletter_mail_input_icon,
} from "../../assets/images.js";

import { EnvelopeIcon } from "/node_modules/@heroicons/react/24/outline/index.js";
import Image from "next/image";
import React from "react";

function Newsletter() {
  return (
    <div className="bg-[#30bead] px-4 py-20 flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 w-full max-w-[610px] md:max-w-[740px]">
        {/* icon Headline */}
        <div className="flex gap-8 items-center">
          <div className="w-[70px] h-[70px]">
            <Image
              className="w-full h-full"
              src={newsletter_mail_icon}
              alt=""
              height={1000}
              width={1000}
            />
          </div>
          <div>
            <h1 className="capitalize text-white font-bold text-[23px] md:text-[29px]">
              Subscribe To{" "}
              <span className="hidden md:visible">
                <br />
              </span>{" "}
              My{" "}
              <span className="md:hidden">
                <br />
              </span>{" "}
              Newsletter
            </h1>
          </div>
        </div>

        {/* email */}
        <div className="flex border-b-[1px] w-full border-white gap-3 items-center py-2">
          {/* envelop icon */}
          <div className="h-5 w-5">
            <Image
              className="w-full h-full"
              src={newsletter_mail_input_icon}
              alt=""
              height={1000}
              width={1000}
            />
          </div>
          {/* email input */}
          <div>
            <input
              className="bg-transparent outline-none text-[17px] text-white placeholder:text-white/70 tracking-wide"
              placeholder="Enter your mail address"
              type="text"
            />
          </div>
        </div>

        {/* button */}
        <div className="bg-white w-full drop-shadow-sm  cursor-pointer rounded-lg text-[#30bead] h-[50px] min-h-[50px] max-h-[50px] flex justify-center items-center">
          <h1>Get Started Now</h1>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
