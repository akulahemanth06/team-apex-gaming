import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { ref: taglineRef, isVisible: taglineVisible } = useScrollReveal({
    threshold: 0.01,
  });

  const scrollToRoster = () => {
    document.getElementById("roster")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.jpg"
          alt="Team Apex Gaming hero background"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/75" />
        {/* Orange accent gradient at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, oklch(var(--background)) 0%, transparent 100%)",
          }}
        />
        {/* Side vignettes */}
        <div
          className="absolute inset-y-0 left-0 w-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, oklch(var(--background)) 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute inset-y-0 right-0 w-32 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, oklch(var(--background)) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Scanline overlay for futuristic effect */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, oklch(var(--foreground)) 2px, oklch(var(--foreground)) 3px)",
          backgroundSize: "100% 4px",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        ref={taglineRef}
      >
        {/* Eyebrow */}
        <div
          className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${
            taglineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <span className="h-px w-12 bg-accent glow-sm" />
          <span className="text-xs font-mono tracking-[0.4em] text-accent uppercase">
            Professional Esports
          </span>
          <span className="h-px w-12 bg-accent glow-sm" />
        </div>

        {/* Main heading */}
        <h1
          className={`font-display font-bold uppercase tracking-tight leading-none transition-all duration-700 ${
            taglineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
          data-ocid="hero.heading"
        >
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground">
            TEAM APEX
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-accent glow-accent pulse-glow">
            GAMING
          </span>
        </h1>

        {/* Tagline */}
        <p
          className={`mt-6 text-base sm:text-lg md:text-xl font-body tracking-[0.2em] text-muted-foreground uppercase transition-all duration-700 ${
            taglineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "350ms" }}
          data-ocid="hero.tagline"
        >
          Built for Dominance
        </p>

        {/* TAG acronym */}
        <div
          className={`mt-3 flex items-center justify-center gap-4 text-xs font-mono text-muted-foreground/60 tracking-widest transition-all duration-700 ${
            taglineVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "450ms" }}
        >
          <span>TACTICAL</span>
          <span className="text-accent/60">·</span>
          <span>AGGRESSIVE</span>
          <span className="text-accent/60">·</span>
          <span>GLOBAL</span>
        </div>

        {/* CTA */}
        <div
          className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ${
            taglineVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "550ms" }}
        >
          <button
            type="button"
            onClick={scrollToRoster}
            className="px-10 py-3.5 font-display font-bold text-sm tracking-widest text-accent-foreground bg-accent hover:bg-accent/90 rounded-sm transition-smooth shadow-glow-md hover:shadow-glow-lg min-w-[200px]"
            data-ocid="hero.explore_button"
          >
            EXPLORE TEAM
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("matches")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-3.5 font-display font-bold text-sm tracking-widest text-foreground bg-transparent border border-border/40 hover:border-accent/50 rounded-sm transition-smooth hover:glow-sm min-w-[200px]"
            data-ocid="hero.matches_button"
          >
            VIEW MATCHES
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs font-mono text-muted-foreground/40 tracking-widest">
          SCROLL
        </span>
        <ChevronDown size={16} className="text-muted-foreground/40" />
      </div>
    </section>
  );
}
