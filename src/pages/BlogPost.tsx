import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Linkedin, BadgeCheck } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import profileImg from "@/assets/anthony.jpeg";
import * as React from "react";
import { Seo } from "@/components/Seo";

const BlogPost = () => {

  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const [startTime, setStartTime] = React.useState<number | null>(null);
  const [actualReadTime, setActualReadTime] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!slug) return;
    setStartTime(Date.now());
    return () => {
      if (startTime) {
        const spent = Math.round((Date.now() - startTime) / 1000);
        localStorage.setItem(`blog_read_${slug}`, spent.toString());
      }
    };
  }, [slug]);

  React.useEffect(() => {
    if (!slug) return;
    const prev = localStorage.getItem(`blog_read_${slug}`);
    if (prev) {
      setActualReadTime(Math.round(Number(prev) / 60));
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Seo title="Post Not Found | Blog" description="Sorry, this blog post could not be found." url="https://acinsight.vercel.app/blog" />
        <div className="text-center">
          <h1 className="text-2xl font-heading font-bold text-foreground mb-4">Post not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Seo
        title={`${post.title} | Blog`}
        description={post.description || post.content[0]}
        url={`https://acinsight.vercel.app/blog/${post.slug}`}
        image={post.image || "/favicon.svg"}
      />
      <Navbar />
      <article className="pt-32 pb-20 px-6">
        <div className="container max-w-2xl">
          <Link
            to="/#blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            {actualReadTime ? (
              <span>{actualReadTime} min read (your time)</span>
            ) : (
              <span>{post.readTime}</span>
            )}
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl tracking-tight text-foreground leading-tight mb-8 animate-fade-up">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 mb-10 pb-8 border-b border-border animate-fade-up animation-delay-200">
            <img
              src={profileImg}
              alt="Anthony-Charbel Rouhana Younes"
              className="w-11 h-11 rounded-full object-cover"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold text-foreground">
                  Anthony-Charbel Rouhana Younes
                </span>
                <BadgeCheck className="w-4 h-4 fill-blue-500 text-white" />
              </div>
              <span className="text-xs text-muted-foreground">Author</span>
            </div>
          </div>

          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed animate-fade-up animation-delay-400">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 py-12 px-8 bg-secondary rounded-2xl text-center animate-fade-up">
            <h3 className="font-heading font-bold text-2xl md:text-3xl tracking-tight text-foreground mb-4">
              Let's Talk
            </h3>
            <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-md mx-auto">
              Enjoyed this article? I'd love to continue the conversation. Book a call and let's discuss ideas, collaboration, or anything on your mind.
            </p>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </Link>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.linkedin.com/in/anthony-charbel-rouhana-younes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Follow me on LinkedIn for more posts
            </a>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default BlogPost;
