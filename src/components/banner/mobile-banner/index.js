import { EnvelopeIcon } from "/node_modules/@heroicons/react/24/outline/index.js";
function MobileBanner() {
  return (
    <div className="xl:hidden w-full px-5 sm:px-14 md:px-6 flex justify-center">
      <div className="w-[570px] md:w-[750px] lg:w-[1153px]">
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
  );
}

export default MobileBanner;
