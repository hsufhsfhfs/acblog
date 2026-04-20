import { Mail, Linkedin } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", href: "mailto:anthonycharbelry@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/anthony-charbel-rouhana-younes/" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary">
      <div className="container max-w-2xl text-center">
        <h2 className="font-heading font-bold text-2xl tracking-tight text-foreground mb-8">
          Connect
        </h2>
        <div className="flex items-center justify-center gap-6">
          {links.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
