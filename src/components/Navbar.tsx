import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container flex items-center justify-between h-16 px-6">
        <Link to="/" className="font-heading font-bold text-lg tracking-tight text-foreground">
          ACRY
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <a href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
          <a href="/#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Blog</a>
          <a href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          <Link
            to="/book"
            className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Call
          </Link>
        </div>
        <Link
          to="/book"
          className="md:hidden text-sm bg-primary text-primary-foreground px-4 py-2 rounded-full"
        >
          Book a Call
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
