import Cards from "./cards";
import React from "react";
import Whychose from "./Whychose";

function WhyChoose() {
  return (
    <div className="flex flex-col gap-14 px-8 sm:px-16 py-24 lg:py-32 bg-cover bg-center bg-[url('/assets/images/all-img/why-choose-section-bg-1.png')]">
      <Whychose />
      <Cards />
    </div>
  );
}

export default WhyChoose;
