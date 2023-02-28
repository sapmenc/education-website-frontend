import React from "react";
import Image from "next/image";

function Card({ img, title, content }) {
  return (
    <div className="w-full rounded-lg shadow-md">
      <div className="h-48 w-48 ">
        <Image
          className="object-contain aspect-[16/9]"
          src={img}
          alt="img"
          width={100}
          height={75}
        ></Image>
      </div>

      <div className="p-4">
        <h4 className="text-xl font-semibold text-blue-600">{title}</h4>
        <p className="mb-2 leading-normal">{content}</p>
      </div>
    </div>
  );
}

export default Card;
