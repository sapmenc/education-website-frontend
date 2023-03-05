import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <div className="bg-[#0c1427] px-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-x-8 align-center ">
      <div className="py-7 flex flex-col">
        <h1 className="text-white text-4xl py-5">Edumim</h1>
        <p className="text-[#434758]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quam
          saepe, porro adipisci enim dolor dolorem veniam ad, nemo velit
          doloremque quisquam. Voluptatum eos libero maiores reiciendis? Eum,
          ipsa voluptates.
        </p>
        <div className="py-4 flex gap-4">
          <Image
            className="cursor-pointer "
            src="data:image/png;base64,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"
            alt=""
            height={30}
            width={30}
          />
          <Image
            className="cursor-pointer  "
            src="data:image/png;base64,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"
            alt=""
            height={30}
            width={30}
          />
        </div>
      </div>
      <div className="flex gap-36 py-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl text-white">Links</h1>
          <h2 className=" text-[#434758] cursor-pointer">Home</h2>
          <h2 className=" text-[#434758] cursor-pointer">About Us</h2>
          <h2 className=" text-[#434758] cursor-pointer">Pricing</h2>
          <h2 className=" text-[#434758] cursor-pointer">Courses</h2>
          <h2 className=" text-[#434758] cursor-pointer">Contact Us</h2>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-white">Legal</h2>
          <h2 className=" text-[#434758] cursor-pointer">Home</h2>
          <h2 className=" text-[#434758] cursor-pointer">About Us</h2>
          <h2 className=" text-[#434758] cursor-pointer">Pricing</h2>
          <h2 className=" text-[#434758] cursor-pointer">Courses</h2>
          <h2 className=" text-[#434758] cursor-pointer">Contact Us</h2>
        </div>
      </div>
      <div>
        <h1 className="text-2xl text-white ">Newsletter</h1>
        <p className="text-[#434758] py-3">
          Join Over
          <span className="text-[#ff7e84] underline"> 68,000 </span>
          People Getting Our Emails Lorem Ipsum Dolor Sit Amet Consectet
        </p>

        <input
          email="text"
          className="bg-[white] p-2 w-96 outline-none border-none rounded placeholder-shown:tracking-wide placeholder:text-[#9da2ab] text-white"
          placeholder="Enter your mail"
        />
        <div className="py-4">
          <div className="tracking-wide w-96 h-[53px] bg-[#fc7e84] text-white p-2 flex justify-center items-center rounded-lg cursor-pointer ease-in  duration-200 outline outline-0 hover:outline-offset-2 hover:outline-4 outline-[#fc7e84] font-semibold ">
            Suscribe Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
