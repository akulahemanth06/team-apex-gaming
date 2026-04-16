import { Badge } from "@/components/ui/badge";
import { players } from "@/data/team";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Flag } from "lucide-react";

const featuredPlayers = players.filter((p) => p.isFeatured);

const roleColors: Record<string, string> = {
  "Entry Fragger": "text-accent",
  Rifler: "text-foreground",
  AWPer: "text-accent",
  "In-Game Leader": "text-foreground",
  Support: "text-muted-foreground",
};

export default function RosterSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();

  return (
    <section id="roster" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background grid lines */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, oklch(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
            THE LINEUP
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground uppercase">
            Featured Players
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-accent glow-sm" />
        </div>

        {/* Player Cards Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          data-ocid="roster.list"
        >
          {featuredPlayers.map((player, index) => (
            <PlayerCard key={player.id} player={player} index={index} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "World Ranking", value: "#5" },
            { label: "Win Rate", value: "79%" },
            { label: "Tournaments Won", value: "8" },
            { label: "Match Record", value: "42W – 11L" },
          ].map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlayerCard({
  player,
  index,
}: { player: (typeof players)[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative glass-card rounded-sm overflow-hidden cursor-pointer transition-all duration-500 hover:glow-md hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      data-ocid={`roster.item.${index + 1}`}
    >
      {/* Player image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={player.image}
          alt={player.handle}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* Orange accent bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 glow-sm" />
      </div>

      {/* Info */}
      <div className="p-4">
        <p
          className={`text-xs font-mono tracking-widest mb-1 ${roleColors[player.role] ?? "text-muted-foreground"}`}
        >
          {player.role.toUpperCase()}
        </p>
        <h3 className="font-display font-bold text-xl tracking-wider text-foreground group-hover:text-accent transition-colors duration-200">
          {player.handle}
        </h3>
        <p className="text-xs text-muted-foreground mt-0.5">{player.name}</p>

        {/* Stats */}
        <div className="mt-3 pt-3 border-t border-border/20 grid grid-cols-2 gap-2 text-center">
          <div>
            <p className="text-xs text-muted-foreground font-mono">K/D</p>
            <p className="font-display font-bold text-sm text-foreground">
              {player.kdRatio}
            </p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground font-mono">WIN%</p>
            <p className="font-display font-bold text-sm text-accent">
              {player.winRate}%
            </p>
          </div>
        </div>
      </div>

      {/* Country badge */}
      <div className="absolute top-3 right-3">
        <Badge
          variant="secondary"
          className="text-xs font-mono bg-background/80 border border-border/30 backdrop-blur-sm"
        >
          <Flag size={10} className="mr-1" />
          {player.country}
        </Badge>
      </div>
    </div>
  );
}

function StatCard({
  stat,
  index,
}: { stat: { label: string; value: string }; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`glass-card rounded-sm p-5 text-center transition-all duration-500 hover:glow-sm ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <p className="font-display font-bold text-2xl text-accent glow-accent">
        {stat.value}
      </p>
      <p className="text-xs font-mono text-muted-foreground tracking-wider mt-1 uppercase">
        {stat.label}
      </p>
    </div>
  );
}
