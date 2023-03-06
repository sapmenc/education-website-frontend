import React, { useEffect } from "react";

import SidebarContent from "./SidebarContent";
import SidebarHeader from "./SidebarHeader";

function Sidebar({ isMobileMenuOpen, setIsMobileMenuOpen }) {
  useEffect(() => {
    const element = document.getElementById("sidebar-not-main");
    element.addEventListener("click", () => {
      setIsMobileMenuOpen(false);
    });
  }, []);
  return (
    <div
      className={`fixed ${
        isMobileMenuOpen ? "scale-x-100" : "scale-x-0"
      } lg:hidden w-screen h-screen top-0 bottom-0 left-0 right-0 z-50 flex  hightlight-off`}
    >
      <div
        id="sidebar-not-main"
        className="w-full bg-black opacity-60 relative flex"
      ></div>
      <div
        className={`absolute flex flex-col top-0 bottom-0 left-0 w-[319px] min-w-[319px] max-w-[319px] bg-white opacity-100 ${
          isMobileMenuOpen ? "scale-x-100" : "scale-x-0"
        } duration-300 origin-left`}
      >
        <SidebarHeader setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <SidebarContent />
      </div>
    </div>
  );
}

export default Sidebar;
