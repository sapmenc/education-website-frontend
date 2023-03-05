import DesktopNav from "./desktop-nav";
import MobileNav from "./mobile-nav";

function Navbar() {
  return (
    <div className="bg-red-100 z-40">
      {/* mobile navbar */}
      <MobileNav />
      {/* desktop navbar */}
      <DesktopNav />
    </div>
  );
}

export default Navbar;
