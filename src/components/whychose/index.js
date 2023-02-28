import Cards from "./cards";
import React from "react";
import Whychose from "./Whychose";

function WhyChoose() {
  return (
    <div className="flex flex-col gap-10">
      <Whychose />
      <Cards />
    </div>
  );
}

export default WhyChoose;
