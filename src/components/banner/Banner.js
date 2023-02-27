import React from "react";
import { useState } from "react";

function Banner() {
  const [text, setText] = useState("Enter your email");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className=" h-[516px] lg:h-[666px] xl:h-[967px] w-full bg-cover bg-center bg-[url('/assets/images/banner/1.png')]"></div>
  );
}

export default Banner;
