import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

function DesktopNav() {
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
      className={`hidden px-5 py-4 w-full lg:flex justify-center ${
        show ? "bg-white" : "bg-transparent"
      } fixed top-0 ease-in-out  drop-shadow`}
    >
      <div className="w-full flex items-center max-w-[1143px] justify-between">
        {/* desktop-nav-logo-container */}
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

        {/* desktop-nav-links */}
        <div className="flex justify-start items-center text-[#7b7b8a] gap-14 text-[16px] tracking-widest font-[400]">
          <Link className="hover:drop-shadow-xl hover:text-[#686875]" href="#">
            Home
          </Link>
          <Link className="hover:drop-shadow-xl hover:text-[#686875]" href="#">
            Events
          </Link>
          <Link className="hover:drop-shadow-xl hover:text-[#686875]" href="#">
            Blog
          </Link>
          <Link className="hover:drop-shadow-xl hover:text-[#686875]" href="#">
            Contacts
          </Link>
        </div>
        {/* desktop-trial-btn */}
        <div className="tracking-wide w-[184px] h-[58px] bg-[#fc7e84] text-white p-2 flex justify-center items-center rounded-lg cursor-pointer ease-in  duration-200 outline outline-0 hover:outline-offset-2 hover:outline-4 outline-[#fc7e84] font-semibold">
          Start Free Trial
        </div>
      </div>
    </div>
  );
}

export default DesktopNav;
