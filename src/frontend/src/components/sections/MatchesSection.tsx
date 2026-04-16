import { matches } from "@/data/team";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, MapPin, Trophy, XCircle } from "lucide-react";

export default function MatchesSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();

  return (
    <section id="matches" className="py-24 bg-background relative">
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
            SEASON RECORD
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground uppercase">
            Recent Matches
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-accent glow-sm" />
        </div>

        {/* Record bar */}
        <RecordBar />

        {/* Match list */}
        <div className="mt-10 space-y-3" data-ocid="matches.list">
          {matches.map((match, index) => (
            <MatchRow key={match.id} match={match} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function RecordBar() {
  const wins = matches.filter((m) => m.result === "win").length;
  const losses = matches.filter((m) => m.result === "loss").length;
  const total = wins + losses;
  const winPct = Math.round((wins / total) * 100);

  return (
    <div className="glass-card rounded-sm p-5 mb-2">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <p className="font-display font-bold text-2xl text-accent">
              {wins}W
            </p>
            <p className="text-xs font-mono text-muted-foreground">Wins</p>
          </div>
          <div className="text-center">
            <p className="font-display font-bold text-2xl text-muted-foreground">
              {losses}L
            </p>
            <p className="text-xs font-mono text-muted-foreground">Losses</p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-display font-bold text-xl text-foreground">
            {winPct}% Win Rate
          </p>
          <p className="text-xs font-mono text-muted-foreground">
            Last {total} matches shown
          </p>
        </div>
      </div>
      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-smooth glow-sm"
          style={{ width: `${winPct}%` }}
        />
      </div>
    </div>
  );
}

function MatchRow({
  match,
  index,
}: {
  match: (typeof matches)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const isWin = match.result === "win";

  return (
    <div
      ref={ref}
      className={`relative group glass-card rounded-sm px-5 py-4 flex items-center gap-4 transition-all duration-500 hover:glow-sm ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
      data-ocid={`matches.item.${index + 1}`}
    >
      {/* Result badge */}
      <div
        className={`flex-shrink-0 w-14 h-10 flex items-center justify-center rounded-sm font-display font-bold text-xs tracking-widest ${
          isWin
            ? "bg-accent/15 border border-accent/30 text-accent glow-sm"
            : "bg-muted/40 border border-border/30 text-muted-foreground"
        }`}
      >
        {isWin ? (
          <span className="flex items-center gap-1">
            <Trophy size={12} />
            WIN
          </span>
        ) : (
          <span className="flex items-center gap-1">
            <XCircle size={12} />
            LOSS
          </span>
        )}
      </div>

      {/* Opponent */}
      <div className="flex-1 min-w-0">
        <p className="font-display font-bold text-sm tracking-wide text-foreground truncate">
          vs. {match.opponent}
        </p>
        <p className="text-xs text-muted-foreground font-mono truncate">
          {match.tournament}
        </p>
      </div>

      {/* Map */}
      {match.map && (
        <div className="hidden sm:flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
          <MapPin size={12} />
          {match.map}
        </div>
      )}

      {/* Date */}
      <div className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
        <Calendar size={12} />
        {match.date}
      </div>

      {/* Score */}
      <div
        className={`flex-shrink-0 font-display font-bold text-base tracking-widest ${
          isWin ? "text-accent" : "text-muted-foreground"
        }`}
      >
        {match.score}
      </div>

      {/* Side accent */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-r-full transition-all duration-300 ${
          isWin
            ? "bg-accent opacity-60 group-hover:opacity-100"
            : "bg-border/40"
        }`}
      />
    </div>
  );
}
