import { useEffect, useState } from "react";

import { Bars3Icon } from "/node_modules/@heroicons/react/24/outline/index";
import Image from "next/image";

function MobileNav() {
  const [show, setShow] = useState(false);
  const navbarChangeListener = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarChangeListener);
  }, []);
  return (
    <div
      className={`lg:hidden px-5 py-4 w-full flex justify-center ${
        show ? "bg-white" : "bg-transparent"
      } fixed top-0 ease-in-out duration-200 drop-shadow`}
    >
      <div className="w-full flex items-center max-w-[730px] justify-between">
        {/* mobile-nav-logo-container */}
        <div>
          <Image
            className="drop-shadow-xl"
            src="/assets/images/logo/ankit-rathore-logo.png"
            width={85}
            height={85}
          ></Image>
        </div>

        {/* mobile-nav-menu-btn-container */}
        <div className="bg-[#f8f8f8] rounded p-2 md:cursor-pointer hover:drop-shadow-md">
          <Bars3Icon className="aspect-square h-8 text-[#7b7b8a]" />
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
