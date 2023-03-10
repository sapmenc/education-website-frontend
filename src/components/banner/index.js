import DesktopBanner from "./desktop-banner";
import MobileBanner from "./mobile-banner";

function Herobanner() {
  return (
    <div className="pt-28 h-[710px] max-h-[710px] sm:h-[600px] sm:max-h-[600px] lg:h-[790px] lg:max-h-[790px] xl:h-[967px] xl:max-h-[967px] w-full bg-cover bg-center bg-[url('/assets/images/banner/1.png')]">
      <MobileBanner />
      <DesktopBanner />
    </div>
  );
}

export default Herobanner;
