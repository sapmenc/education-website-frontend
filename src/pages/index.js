import BestOnline from "@/components/bestonline";
import Blogs from "@/components/blog";
import Courses from "@/components/courses";
import Footer from "@/components/footer";
import Head from "next/head";
import Herobanner from "../components/banner";
import Navbar from "../components/navbar";
import Newsletter from "@/components/newsletter";
import Numbers from "@/components/numbers";
import TrustedBy from "../components/trustedBy";
import Whychoose from "@/components/whychose";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script>
      </Head>
      <div className="h-[2000px]">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Herobanner />
          <TrustedBy />
          <Whychoose />
          {/* <Courses /> */}
          <BestOnline />
          <Newsletter />
          <Numbers />
          {/* <Blogs /> */}
          {/* <Footer /> */}
        </main>
      </div>
    </>
  );
}
