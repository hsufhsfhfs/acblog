import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Seo } from "@/components/Seo";

const Index = () => {
  return (
    <>
      <Seo
        title="Anthony-Charbel Rouhana Younes | MIS & Tech Blog"
        description="Insights on business, data, and technology from an MIS student. Read the blog and book a call."
        url="https://acinsight.vercel.app/"
        image="/favicon.svg"
      />
      <div className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
