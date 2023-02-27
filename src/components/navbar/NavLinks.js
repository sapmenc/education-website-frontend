import React from "react";

const NavLinks = () => {
  const links = [{ name: "Pages" }, { name: "Courses" }, { name: "Contacts" }];

  return (
    <>
      {links.map((Link) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer">
            <h1 className="py-7">{Link.name}</h1>
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
