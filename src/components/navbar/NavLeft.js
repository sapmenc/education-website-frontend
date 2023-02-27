import React, { useState } from "react";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Button from "./Button";
// import { Bars3Icon } from "@heroicons/react/24/solid";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
const NavLeft = () => {
  const [open, setopen] = useState(false);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between  ">
          <img
            className="md:cursor-pointer h-9"
            src="https://w7.pngwing.com/pngs/941/692/png-transparent-black-small-apple-logo-logo-material-apple-logo-black-thumbnail.png"
            alt="logo"
          />
          <div className="text-1xl">{/* <Bars3Icon /> */}</div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins] ">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        <div className="md:hidden">
          <Button />
        </div>
        {/* Mobile Nav */}
        <ul
          className={`
        md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5 ">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavLeft;
