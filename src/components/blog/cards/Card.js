import React from "react";
import Image from "next/image";
const Card = ({ title, image, content, price, tag }) => {
  return (
    <div className="px-5 ">
      <div className="group w-[400px] p-4 md:cursor-pointer flex flex-col justify-start gap-[37px] rounded-lg shadow-lg  hover:ease-out duration-300 ">
        {/* image */}
        <div className="relative block:w-full object-contain rounded-lg overflow-hidden flex justify-center items-center text-[50] h-full w-full">
          <Image
            className="w-full h-full"
            width={170}
            height={50}
            object-fit="contain"
            src={image}
            alt="logo"
          />
        </div>

        <button className=" mt-5 ml-5 py-2 px-3 text-[17px] absolute text-bold text-white bg-[#30bead] rounded-lg font-bold">
          {tag}
        </button>

        {/* description */}
        <div className="flex flex-col justify-start gap-[27px] ">
          <div className="flex gap-5 text-[#838391]">
            <img
              src="https://bestwpware.com/react-templates/edumim/static/media/admin.df21c265e0cfbaaf791a928ad3994ac1.svg"
              alt=""
            />
            <p> Admin </p>
            <img
              src="https://bestwpware.com/react-templates/edumim/static/media/calender.2765d03e09473d7c8cebc2b0ede3995c.svg"
              alt=""
            />
            <p>Jan 29, 2022</p>
          </div>
          <h1 className="text-[22px] lg:text-2xl font-bold tracking-wide h-[66px] max-h-[66px] w-full overflow-hidden hover:text-[#fc7e84] ease-out duration-300">
            {title}
          </h1>
          <h3 className="hover:underline">Read More</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
