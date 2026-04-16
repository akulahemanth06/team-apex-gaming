import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Globe, Trophy, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: Trophy,
    title: "Born to Win",
    description:
      "TAG was founded in 2021 with a single purpose: to compete at the highest level of esports. From our first LAN event to international stages, every step has been driven by relentless determination.",
  },
  {
    icon: Zap,
    title: "Elite Performance",
    description:
      "Our players train 10+ hours daily with dedicated coaches, analysts, and sports psychologists. We don't just play games — we build champions who perform under pressure when it matters most.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Representing athletes from Korea, Singapore, the US, Canada, and the UK, TAG brings together diverse perspectives and playstyles that make us unpredictable and unstoppable on the international stage.",
  },
  {
    icon: Users,
    title: "Community First",
    description:
      "Our fans are the lifeblood of TAG. From Discord to live events, we invest in the community that built us — engaging, celebrating, and growing together as we chase every championship.",
  },
];

export default function AboutSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden"
    >
      {/* Decorative orange glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-5 blur-3xl pointer-events-none"
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
            OUR STORY
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground uppercase">
            About TAG
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-accent glow-sm" />
        </div>

        {/* Vision statement */}
        <VisionStatement />

        {/* Pillars grid */}
        <div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5"
          data-ocid="about.pillars.list"
        >
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function VisionStatement() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative glass-card rounded-sm p-8 md:p-12 text-center transition-all duration-700 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-accent glow-sm" />
      <blockquote className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight tracking-tight max-w-3xl mx-auto">
        "We don't settle for&nbsp;
        <span className="text-accent glow-accent">second place.</span>
        &nbsp;Every match, every round, every single pixel — we play to&nbsp;
        <span className="text-accent glow-accent">dominate."</span>
      </blockquote>
      <p className="mt-6 text-sm font-mono text-muted-foreground tracking-widest">
        — TAG Leadership, 2021
      </p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-px bg-accent glow-sm" />
    </div>
  );
}

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = pillar.icon;

  return (
    <div
      ref={ref}
      className={`group glass-card rounded-sm p-6 transition-all duration-500 hover:glow-sm ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-ocid={`about.pillars.item.${index + 1}`}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-accent/15 border border-accent/20 flex items-center justify-center glow-sm group-hover:bg-accent/25 transition-smooth">
          <Icon size={18} className="text-accent" />
        </div>
        <div>
          <h3 className="font-display font-bold text-base text-foreground tracking-wide group-hover:text-accent transition-colors">
            {pillar.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </div>
    </div>
  );
}
