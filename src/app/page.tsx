import ScrollUp from "@/components/Common/ScrollUp";
import ProductionIntro from "@/components/ProductionIntro";
// import AboutSectionOne from "@/components/About/AboutSectionOne";
// import AboutSectionTwo from "@/components/About/AboutSectionTwo";
// import Blog from "@/components/Blog";
// import Brands from "@/components/Brands";
// import Contact from "@/components/Contact";
// import Features from "@/components/Features";
// import Pricing from "@/components/Pricing";
// import Testimonials from "@/components/Testimonials";
// import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "This is Home for Ecommerce Platform DT Green",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <ProductionIntro />
      {/* <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact /> */}
    </>
  );
}
