import React from "react";
import Image from "next/image";

const Card = ({ title, image, content, price }) => {
  return (
    <div className="px-5">
      <div className="group h-[460px] w-[400px] md:cursor-pointer flex flex-col justify-start gap-[37px] rounded-lg shadow-lg  hover:ease-out duration-300">
        {/* image */}
        <div className=" relative block:w-full object-contain flex justify-center items-center text-[50]">
          <img
            src="https://bestwpware.com/react-templates/edumim/static/media/c1.9a96774cfca367007a65.png"
            alt=""
          />
        </div>

        <button className=" mt-5 ml-7 p-2 absolute text-bold text-white bg-[#30bead]">
          Art and Design
        </button>

        {/* description */}
        <div className="flex flex-col justify-start gap-[27px] ">
          <h1 className="text-[22px] lg:text-2xl font-bold tracking-wide text-[#30bead]">
            $29.8
          </h1>
          <h1 className="text-[22px] lg:text-2xl font-bold tracking-wide">
            Basic fundamentals of Interior & graphic design.
          </h1>
          <div className="flex gap-5 text-[#838391]">
            <img
              src="https://bestwpware.com/react-templates/edumim/static/media/file.b3a3196666cf48dfa8d418309a9d3ac1.svg"
              alt=""
            />
            <p> 2 lessons </p>
            <img
              src="https://bestwpware.com/react-templates/edumim/static/media/file.b3a3196666cf48dfa8d418309a9d3ac1.svg"
              alt=""
            />
            <p> 2 lessons </p>
            <img
              src="https://bestwpware.com/react-templates/edumim/static/media/file.b3a3196666cf48dfa8d418309a9d3ac1.svg"
              alt=""
            />
            <p> 2 lessons </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
