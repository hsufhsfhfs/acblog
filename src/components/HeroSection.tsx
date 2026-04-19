import { Link } from "react-router-dom";
import profileImg from "../assets/anthony.jpeg";
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6">
      <div className="container max-w-4xl text-center">
        <div className="animate-fade-up">
          <img
            src={profileImg}
            alt="Anthony-Charbel Rouhana Younes"
            className="w-32 h-32 rounded-full object-cover mx-auto mb-8 shadow-lg"
          />
        </div>
        <h1 className="animate-fade-up animation-delay-200 font-heading font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight text-foreground leading-tight">
          Anthony-Charbel<br />Rouhana Younes
        </h1>
        <p className="animate-fade-up animation-delay-400 mt-6 text-lg md:text-xl text-muted-foreground font-light tracking-wide">
          MIS Student | Business Strategy · Data Analytics · Systems Design
        </p>
        <p className="animate-fade-up animation-delay-400 mt-4 text-base md:text-lg text-muted-foreground max-w-lg mx-auto">
          I share insights on business, data, and technology.
        </p>
        <div className="animate-fade-up animation-delay-600 mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Book a Call
          </Link>
          <a
            href="#blog"
            className="border border-border text-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:bg-secondary transition-colors"
          >
            Read My Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
