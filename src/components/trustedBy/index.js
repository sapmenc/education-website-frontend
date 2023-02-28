import Image from "next/image";

function TrustedBy() {
  return (
    <div className="flex flex-col items-center py-20 gap-12 px-5 md:px-20">
      <div className=" text-center ">
        <span className="text-[#ff7e84] text-2xl underlined-red relative z-[-1]">
          Trusted{" "}
        </span>
        <span className=" text-[#0c1327]  text-2xl">
          By 10000+ young minds around the world!
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-10  md:gap-20 max-w-[1700px]">
        <Image
          className="hover:cursor-pointer ease-out duration-500 grayscale hover:grayscale-0 object-contain z-10"
          src="/assets/images/all-img/brands/1.svg"
          alt="i am here"
          width={150}
          height={75}
        ></Image>
        <Image
          className="hover:cursor-pointer ease-out duration-500 grayscale hover:grayscale-0 "
          src="/assets/images/all-img/brands/2.svg"
          alt="i am here"
          width={150}
          height={75}
        ></Image>
        <Image
          className="hover:cursor-pointer ease-out duration-500 grayscale hover:grayscale-0 "
          src="/assets/images/all-img/brands/3.svg"
          alt="i am here"
          width={150}
          height={75}
        ></Image>
        <Image
          className="hover:cursor-pointer ease-out duration-500 grayscale hover:grayscale-0 "
          src="/assets/images/all-img/brands/4.svg"
          alt="i am here"
          width={150}
          height={75}
        ></Image>
        <Image
          className="hover:cursor-pointer ease-out duration-500 grayscale hover:grayscale-0 "
          src="/assets/images/all-img/brands/5.svg"
          alt="i am here"
          width={150}
          height={75}
        ></Image>
      </div>
    </div>
  );
}

export default TrustedBy;
