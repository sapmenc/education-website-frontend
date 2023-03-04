import { EnvelopeIcon } from "/node_modules/@heroicons/react/24/outline/index.js";
import Image from "next/image";
import { hero_banner_student_image } from "@/assets/Images";
function DesktopBanner() {
  return (
    <div className="hidden xl:flex relative xl:h-[855px] xl:max-h-[855px] overflow-hidden justify-center">
      <div className="xl:h-[300px] xl:max-h-[855px] w-[700px] absolute top-0 right-0 z-10">
        <Image
          className="object-contain"
          src={hero_banner_student_image}
          alt=""
          height={2000}
          width={2000}
        />
      </div>
      <div className="z-20 w-full h-full max-w-[1153px] 2xl:max-w-[1400px] flex justify-start">
        <div className="w-[50%] flex flex-col justify-center">
          <div className="max-w-[576px] lg:max-w-[608px]">
            {/* Headline */}
            <div className=" whitespace-normal">
              <h1 className="font-bold text-[52px] md:text-[60px] lg:text-[75px] tracking-wide">
                Explore, <br />
                <span className="underlined relative text-[#32bead] z-[-1]">
                  Discover,{" "}
                </span>
                Ignite Curiosity
              </h1>
            </div>

            {/* Sub-Headline */}
            <div className="mt-5">
              <h2 className="text-[20px] text-[#7b7b8a]">
                Explore the Fascinating World of Physics and give your child the
                gift of curiosity.
              </h2>
            </div>

            {/* Email Input */}
            <div className="mt-5 flex flex-col md:flex-row bg-white items-center p-3 rounded-xl gap-5">
              <div className="w-full flex items-center gap-3 px-2">
                <div className="h-7 w-7 text-[#7d7d8b]">
                  <EnvelopeIcon />
                </div>
                <input
                  email="text"
                  className="p-2 w-full outline-none border-none placeholder-shown:border-red-500 placeholder-shown:tracking-wide placeholder-shown:font-light placeholder-shown:text-[#7d7d8b]"
                  placeholder="Enter your mail"
                />
              </div>
              <div className="tracking-wide w-full md:w-auto md:min-w-[175px] h-[52px] bg-[#fc7e84] text-white p-2 flex justify-center items-center rounded-lg cursor-pointer ease-in  duration-200 outline outline-0 hover:outline-offset-2 hover:outline-4 outline-[#fc7e84] font-semibold">
                Get Started Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopBanner;
