import Head from "next/head";
import Footer from "../components/Footer";
import Hero from "./components/Hero";
import Faq from "./components/Faq";
import Intro from "./components/Intro";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";

export default function index() {
  return (
    <>
      <Head>
        <title>SEOLution | SEO Lead Generation</title>
        <meta
          name="description"
          content="We offer Lead Generation services for SEO Agencies. Get more calls or
          your money back!"
        />
      </Head>
      <Hero />
      <Intro />
      <Pricing />
      <CTA />
      <Faq />
      <Testimonials />
      <Footer />
    </>
  );
}
