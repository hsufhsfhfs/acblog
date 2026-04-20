import { ArrowUpRight, Linkedin, Plus } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const [searchParams] = useSearchParams();
  const isAdmin = searchParams.get("admin") === "true";

  return (
    <section id="blog" className="py-32 px-6 bg-secondary">
      <div className="container max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight text-foreground">
            Blog
          </h2>
          {isAdmin && (
            <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" />
              Add Post
            </button>
          )}
        </div>
        <p className="text-muted-foreground mb-12 text-base md:text-lg">
          Ideas on business, data, and technology.
        </p>
        <div className="grid gap-1">
          {blogPosts.map((article, index) => (
            <Link
              key={article.slug}
              to={`/blog/${article.slug}`}
              className="group flex items-start justify-between gap-4 py-6 border-b border-border hover:pl-2 transition-all duration-300 opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: "forwards" }}
            >
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-lg md:text-xl text-foreground group-hover:text-muted-foreground transition-colors">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{article.readTime}</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="https://www.linkedin.com/in/anthony-charbel-rouhana-younes/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Linkedin className="w-4 h-4" />
            See my latest insights on LinkedIn
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
