import React from "react";
import Desktop from "./bestonline-Desktop";
import Mobile from "./bestonline-mobile";
function BestOnline() {
  return (
    <div className=" pt-28 h-[710px] sm:h-[600px] lg:h-[790px] xl:h-[967px] w-full bg-cover bg-center bg-[url('/assets/images/all-img/section-bg-5')] ">
      <Mobile />
      {/* <Desktop /> */}
    </div>
  );
}

export default BestOnline;
