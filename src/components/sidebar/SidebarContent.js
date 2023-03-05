import React from "react";
import SidebarFooter from "./SidebarFooter";
import SidebarItems from "./SidebarItems";

function SidebarContent() {
  return (
    <div className="overflow-y-scroll h-[85vh] min-h-[85vh] gap-4 max-h-[85vh] overflow-x-hidden py-4 flex flex-col justify-between">
      <SidebarItems />
      <SidebarFooter />
    </div>
  );
}

export default SidebarContent;
