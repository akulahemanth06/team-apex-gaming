import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Roster", href: "#roster" },
  { label: "Matches", href: "#matches" },
  { label: "Content", href: "#content" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/40 shadow-elevation-1"
            : "bg-transparent"
        }`}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-3 group bg-transparent border-0 p-0"
            data-ocid="nav.logo"
          >
            <div className="w-9 h-9 rounded-sm overflow-hidden glow-sm group-hover:glow-md transition-smooth">
              <img
                src="/assets/generated/tag-logo-transparent.dim_120x120.png"
                alt="TAG Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-sm tracking-widest text-foreground group-hover:text-accent transition-colors duration-200">
                TEAM APEX
              </span>
              <span className="font-display font-bold text-xs tracking-widest text-accent">
                GAMING
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-4 py-2 text-sm font-display font-medium tracking-wider transition-colors duration-200 bg-transparent border-0 ${
                      isActive
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-ocid={`nav.${id}.link`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full glow-sm" />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick("#roster")}
              className="hidden md:inline-flex items-center px-5 py-2 text-xs font-display font-bold tracking-widest text-accent-foreground bg-accent hover:bg-accent/90 rounded-sm transition-smooth shadow-glow-sm hover:shadow-glow-md"
              data-ocid="nav.cta_button"
            >
              EXPLORE TEAM
            </button>
            <button
              type="button"
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              data-ocid="nav.mobile_menu_toggle"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        data-ocid="nav.mobile_menu"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-background/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
          onKeyUp={(e) => e.key === "Escape" && setMobileOpen(false)}
          role="button"
          tabIndex={-1}
          aria-label="Close mobile menu"
        />
        {/* Slide panel */}
        <div
          className={`absolute top-0 left-0 h-full w-72 bg-card border-r border-border/40 shadow-elevation-2 transition-transform duration-300 ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-6 border-b border-border/30 flex items-center justify-between">
            <span className="font-display font-bold text-sm tracking-widest text-accent">
              TAG
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-1 text-muted-foreground hover:text-foreground"
              aria-label="Close menu"
              data-ocid="nav.mobile_close_button"
            >
              <X size={20} />
            </button>
          </div>
          <ul className="p-4 space-y-1">
            {NAV_ITEMS.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left flex items-center px-4 py-3 rounded-sm text-sm font-display font-medium tracking-wider transition-colors duration-200 ${
                      isActive
                        ? "text-accent bg-accent/10 border border-accent/20"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                    data-ocid={`nav.mobile.${id}.link`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
