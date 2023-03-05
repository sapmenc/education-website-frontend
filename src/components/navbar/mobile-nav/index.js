import { useEffect, useState } from "react";

import { Bars3Icon } from "/node_modules/@heroicons/react/24/outline/index";
import Image from "next/image";
import Link from "next/link";

function MobileNav() {
  const [show, setShow] = useState(false);
  const navbarChangeListener = () => {
    if (window.scrollY > 0) {
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
      className={`lg:hidden px-5 sm:px-14 md:px-6 py-4 w-full flex justify-center ${
        show ? "bg-white" : "bg-transparent"
      } fixed top-0 ease-in-out duration-500 drop-shadow z-50`}
    >
      <div className="flex items-center w-[570px] md:w-[750px] max-w-[750px] justify-between">
        {/* mobile-nav-logo-container */}
        <div>
          <Link href="/">
            <Image
              className="drop-shadow-xl"
              src="/assets/images/logo/ankit-rathore-logo.png"
              width={85}
              height={85}
            ></Image>
          </Link>
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
