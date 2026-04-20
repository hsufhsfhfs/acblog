const CTASection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container max-w-2xl text-center">
        <h2 className="font-heading font-bold text-4xl md:text-5xl tracking-tight text-foreground mb-6">
          Let's Talk
        </h2>
        <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-md mx-auto">
          Whether it's a collaboration, an idea, or just a conversation — I'm always open to connecting with curious minds.
        </p>
        <a
          href="https://calendly.com/anthonycharbelrouhanayounes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Book a Call →
        </a>
      </div>
    </section>
  );
};

export default CTASection;
