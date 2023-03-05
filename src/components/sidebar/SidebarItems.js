import React from "react";
import SidebarItem from "./SidebarItem";
import { sidebarItems } from "../../assets/sidebarItems";

function SidebarItems() {
  return (
    <div className="">
      {sidebarItems.map((sidebarItem) => {
        return (
          <SidebarItem
            optionName={sidebarItem.optionName}
            optionLink={sidebarItem.optionLink}
            moreItems={sidebarItem.moreItems}
          />
        );
      })}
    </div>
  );
}

export default SidebarItems;
