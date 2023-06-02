import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import Bannerr from "@/components/Bannerr";
import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import FirstContainer from "@/components/FirstContainer";
import Footer from "@/components/Footer";
import FourthContainer from "@/components/FourthContainer";
import Gifts from "@/components/Gifts";
import List from "@/components/List";
import Navbar from "@/components/Navbar";
import SecondContainer from "@/components/SecondContainer";
import Slider from "@/components/Slider";
import Stamp from "@/components/Stamp";
import StepLine from "@/components/StepLine";
import ThirdContainer from "@/components/ThirdContainer";
import ThirdContainerr from "@/components/ThirdContainerr";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Omega 3 Plus Nutrilite</title>
        <meta name="Crema Dental Landing Page" content="Generated by Dafon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/images/logo-glister.png" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden scrollbar scrollbar-track-btnColor2 scrollbar-thumb-btnColor1">
        {/* <Navbar /> */}
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <div className="w-screen h-screen">
            <Bannerr />
            {/* <Banner /> */}
            <FirstContainer />
            <SecondContainer />
            <StepLine />
            {/* <ThirdContainer /> */}
            <FourthContainer />
            <ThirdContainerr />
            <Slider />
            <Benefits />
            <Gifts />
            <List />
            <Stamp />
            <AboutMe />
            <Faq />
            <Contact />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}