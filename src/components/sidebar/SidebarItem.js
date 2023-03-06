import React, { useState } from "react";

import { ChevronRightIcon } from "../../../node_modules/@heroicons/react/24/outline/index.js";
import Link from "next/link.js";

function SidebarItem({ optionName, optionLink = "", moreItems = [] }) {
  const [areMoreOpen, setAreMoreOpen] = useState(false);
  return (
    <div className="w-full px-4 border-gray-400 border-b-[0.5px] flex flex-col text-[#7c7c8b]">
      <div className="flex items-center h-[45px] justify-between tracking-wide">
        <Link
          href={optionLink}
          className="w-full h-full flex items-center hover:text-black duration-200 text-[17px]"
        >
          <div>
            <h1>{optionName}</h1>
          </div>
        </Link>
        {moreItems.length > 0 && (
          <div
            className="h-full w-[20px] flex items-center justify-center"
            onClick={() => {
              setAreMoreOpen(!areMoreOpen);
            }}
          >
            <ChevronRightIcon className="h-full w-full hover:text-black duration-200 cursor-pointer" />
          </div>
        )}
      </div>
      <div
        className={`origin-top ${
          areMoreOpen ? "h-auto scale-y-100" : "h-0 scale-y-0"
        } duration-300`}
      >
        <div
          className={`${
            areMoreOpen ? "opacity-100" : "opacity-0"
          } px-4 flex flex-col `}
        >
          {moreItems.map(({ itemName, itemRedirectLink }, key) => {
            return (
              <Link href={itemRedirectLink}>
                <div
                  className={`h-[40px] flex items-center text-sm hover:text-black duration-200 ${
                    key !== moreItems.length - 1 &&
                    "border-gray-400 border-b-[0.5px]"
                  }`}
                >
                  {itemName}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
