import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Linkedin, ArrowUpRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { Seo } from "@/components/Seo";

const BookCall = () => {
  return (
    <>
      <Seo
        title="Book a Call | Anthony-Charbel Rouhana Younes"
        description="Book a call with Anthony-Charbel Rouhana Younes to discuss business, data, technology, or collaboration."
        url="https://acinsight.vercel.app/book"
      />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-20 px-6">
          <div className="container max-w-3xl">
            <h1 className="font-heading font-bold text-3xl md:text-5xl tracking-tight text-foreground mb-4">
              Book a Call
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-lg">
              Let's connect — whether it's about a collaboration, an idea, or just a conversation.
            </p>

            <div className="w-full rounded-2xl overflow-hidden border border-border bg-background mb-16">
              <iframe
                src="https://calendly.com/anthonycharbelrouhana-younes?hide_gdpr_banner=1&hide_event_type_details=1&hide_landing_page_details=1"
                width="100%"
                height="660"
                frameBorder="0"
                title="Schedule a call with Anthony-Charbel"
                className="w-full min-h-[500px] md:min-h-[660px]"
              />
            </div>

            <div className="mb-16">
              <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-foreground mb-8">
                Latest Posts
              </h2>
              <div className="grid gap-1">
                {blogPosts.slice(0, 4).map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="group flex items-start justify-between gap-4 py-5 border-b border-border hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading font-semibold text-base md:text-lg text-foreground group-hover:text-muted-foreground transition-colors">
                        {post.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="py-12 px-8 bg-secondary rounded-2xl text-center">
              <h3 className="font-heading font-bold text-2xl tracking-tight text-foreground mb-3">
                Follow on LinkedIn
              </h3>
              <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md mx-auto">
                I regularly share insights on business, data, and technology. Follow along for my latest posts.
              </p>
              <a
                href="https://www.linkedin.com/in/anthony-charbel-rouhana-younes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Linkedin className="w-4 h-4" />
                View LinkedIn Posts
              </a>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BookCall;
