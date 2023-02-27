import Head from "next/head";
import Herobanner from "../components/banner";
import Navbar from "../components/navbar";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[2000px]">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Herobanner />
        </main>
      </div>
    </>
  );
}
