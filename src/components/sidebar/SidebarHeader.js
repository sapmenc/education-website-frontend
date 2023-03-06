import Image from "next/image";
import Link from "next/link";
import React from "react";
import { XMarkIcon } from "/node_modules/@heroicons/react/24/outline/index";
import { ankit_rathor_logo } from "@/assets/images";

function SidebarHeader({ setIsMobileMenuOpen }) {
  return (
    <div className="p-4 h-[20vh] min-h-[20vh] max-h-[20vh] flex justify-between items-center">
      <Link href="/">
        <Image
          className="drop-shadow-xl"
          src={ankit_rathor_logo}
          width={85}
          height={85}
        ></Image>
      </Link>
      <div
        className="bg-white rounded-full p-2 md:cursor-pointer drop-shadow md:hover:drop-shadow-md z-50"
        onClick={() => {
          setIsMobileMenuOpen(false);
        }}
      >
        <XMarkIcon className="aspect-square h-8 text-black" />
      </div>
    </div>
  );
}

export default SidebarHeader;
