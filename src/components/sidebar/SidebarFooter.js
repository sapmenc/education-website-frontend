import Image from "next/image";
import Link from "next/link";
import React from "react";
import { social_medias } from "@/assets/images";

function SidebarFooter() {
  return (
    <div className="h-[20vh] min-h-[20vh] max-h-[20vh] px-4 flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="Andika-font text-center text-lg font-bold">
            Follow Us
          </h1>
        </div>
        <div className="flex gap-4">
          {social_medias.map((social_media) => {
            return (
              <Link href={social_media.link}>
                <div>
                  <Image
                    className="h-full w-full"
                    src={social_media.img}
                    alt={"social media icon"}
                    height={30}
                    width={30}
                  ></Image>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SidebarFooter;
