import {
  newsletter_mail_icon,
  newsletter_mail_input_icon,
} from "../../assets/images.js";

import Image from "next/image";

function Newsletter() {
  return (
    <div className="bg-[#30bead] px-4 py-20 flex justify-center items-center">
      <div className="flex flex-col lg:flex-row items-center gap-4 w-full max-w-[610px] md:max-w-[740px] lg:max-w-[1150px]">
        {/* icon Headline */}
        <div className="flex gap-8 items-center lg:min-w-[375px]">
          <div className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]">
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
              <span className="hidden md:inline">
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
          <div className="w-full">
            <input
              className="bg-transparent w-full outline-none text-[17px] text-white placeholder:text-white/70 tracking-wide"
              placeholder="Enter your mail address"
              type={"email"}
            />
          </div>
        </div>

        {/* button */}
        <div className="group bg-white lg:text-[18px] lg:py-[30px] w-full lg:max-w-[204px] lg:font-medium drop-shadow-sm  cursor-pointer rounded-lg text-[#30bead] h-[50px] min-h-[50px] max-h-[50px] flex justify-center items-center">
          <h1 className="md:group-hover:scale-105 duration-200">
            Get Started Now
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
