import { useEffect, useState } from "react";

import { Bars3Icon } from "/node_modules/@heroicons/react/24/outline/index";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "../../sidebar/Sidebar";
import { ankit_rathor_logo } from "@/assets/images";

function MobileNav() {
  const [show, setShow] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <div className="relative">
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <div
        className={`lg:hidden px-5 sm:px-14 md:px-6 py-4 w-full flex justify-center ${
          show ? "bg-white" : "bg-transparent"
        } fixed top-0 ease-in duration-500 drop-shadow z-40`}
      >
        <div className="flex items-center w-[570px] md:w-[750px] max-w-[750px] justify-between">
          {/* mobile-nav-logo-container */}
          <div>
            <Link href="/">
              <Image
                className="drop-shadow-xl"
                src={ankit_rathor_logo}
                width={85}
                height={85}
              ></Image>
            </Link>
          </div>

          {/* mobile-nav-menu-btn-container */}
          <div
            className="bg-[#f8f8f8] rounded p-2 md:cursor-pointer hover:drop-shadow-md z-50"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <Bars3Icon className="aspect-square h-8 text-[#7b7b8a]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
