import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MessageSquare, Send, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Twitter, label: "Twitter / X", handle: "@TeamApexGaming", href: "#" },
  { icon: Youtube, label: "YouTube", handle: "Team Apex Gaming", href: "#" },
  {
    icon: MessageSquare,
    label: "Discord",
    handle: "discord.gg/tag",
    href: "#",
  },
  {
    icon: Mail,
    label: "Business Email",
    handle: "contact@teamapexgaming.gg",
    href: "#",
  },
];

export default function ContactSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } =
    useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", message: "" });
      toast.success("Message sent!", {
        description: "We'll get back to you within 48 hours.",
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-muted/20 relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div
        className="absolute left-0 bottom-0 w-80 h-80 rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "oklch(var(--accent))" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          ref={headingRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-xs font-mono tracking-[0.3em] text-accent mb-3">
            GET IN TOUCH
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground uppercase">
            Contact Us
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-accent glow-sm" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Social links */}
          <div>
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Follow TAG
            </p>
            <div className="space-y-3" data-ocid="contact.social.list">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="group flex items-center gap-4 glass-card rounded-sm p-4 hover:glow-sm transition-smooth"
                    data-ocid={`contact.social.item.${index + 1}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-9 h-9 rounded-sm bg-accent/15 border border-accent/20 flex items-center justify-center glow-sm group-hover:bg-accent/30 transition-smooth">
                      <Icon size={16} className="text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">
                        {social.label}
                      </p>
                      <p className="text-sm font-display font-medium text-foreground group-hover:text-accent transition-colors">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className={`glass-card rounded-sm p-8 transition-all duration-700 ${
              formVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <p className="text-sm font-mono text-muted-foreground mb-6 tracking-wider uppercase">
              Send a Message
            </p>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
              data-ocid="contact.form"
            >
              <div className="space-y-1.5">
                <Label
                  htmlFor="name"
                  className="text-xs font-mono tracking-wider text-muted-foreground"
                >
                  YOUR NAME
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                  className="bg-background/50 border-border/40 focus:border-accent/50 font-body"
                  data-ocid="contact.name.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-xs font-mono tracking-wider text-muted-foreground"
                >
                  EMAIL ADDRESS
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  required
                  className="bg-background/50 border-border/40 focus:border-accent/50 font-body"
                  data-ocid="contact.email.input"
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="message"
                  className="text-xs font-mono tracking-wider text-muted-foreground"
                >
                  MESSAGE
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  placeholder="Tell us about sponsorship, partnerships, or fan inquiries..."
                  required
                  rows={4}
                  className="bg-background/50 border-border/40 focus:border-accent/50 font-body resize-none"
                  data-ocid="contact.message.textarea"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 py-3 font-display font-bold text-sm tracking-widest text-accent-foreground bg-accent hover:bg-accent/90 disabled:opacity-60 rounded-sm transition-smooth shadow-glow-sm hover:shadow-glow-md"
                data-ocid="contact.submit_button"
              >
                {submitting ? (
                  <span className="animate-pulse">SENDING…</span>
                ) : (
                  <>
                    <Send size={14} />
                    SEND MESSAGE
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
