import { Twitch, Twitter, Youtube } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const footerLinks: Record<string, { label: string; href: string }[]> = {
  Team: [
    { label: "Roster", href: "#roster" },
    { label: "Matches", href: "#matches" },
    { label: "Standings", href: "#matches" },
    { label: "Contracts", href: "#about" },
  ],
  Content: [
    { label: "Highlights", href: "#content" },
    { label: "Interviews", href: "#content" },
    { label: "Podcasts", href: "#content" },
    { label: "Merch", href: "#about" },
  ],
  Company: [
    { label: "About TAG", href: "#about" },
    { label: "Sponsors", href: "#about" },
    { label: "Careers", href: "#about" },
    { label: "Press", href: "#about" },
  ],
};

const socials = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: Twitch, label: "Twitch", href: "https://twitch.tv" },
  { icon: SiDiscord, label: "Discord", href: "https://discord.com" },
];

const year = new Date().getFullYear();
const hostname =
  typeof window !== "undefined"
    ? encodeURIComponent(window.location.hostname)
    : "";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/30 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-sm overflow-hidden glow-sm">
                <img
                  src="/assets/generated/tag-logo-transparent.dim_120x120.png"
                  alt="TAG"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="leading-tight">
                <p className="font-display font-bold text-xs tracking-widest text-foreground">
                  TEAM APEX
                </p>
                <p className="font-display font-bold text-xs tracking-widest text-accent">
                  GAMING
                </p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Built for dominance. Competing at the highest level of
              professional esports since 2021.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 mt-5">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-sm bg-muted/40 border border-border/30 flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 hover:glow-sm transition-smooth"
                  data-ocid={`footer.${label.toLowerCase()}.link`}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-mono text-xs tracking-widest text-muted-foreground mb-4 uppercase">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-accent transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
            <span>
              © {year}. Built with love using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                caffeine.ai
              </a>
            </span>
            <span className="hidden md:inline">·</span>
            <span className="text-muted-foreground/60">
              This is a fan-made website. Not affiliated with any official
              organization.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
