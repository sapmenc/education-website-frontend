import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ankit_rathor_logo } from "@/assets/images";

function SidebarHeader() {
  return (
    <div className="p-4 h-[15vh] min-h-[15vh] max-h-[15vh]">
      <Link href="/">
        <Image
          className="drop-shadow-xl"
          src={ankit_rathor_logo}
          width={85}
          height={85}
        ></Image>
      </Link>
    </div>
  );
}

export default SidebarHeader;
