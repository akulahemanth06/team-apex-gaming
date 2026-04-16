import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { highlights } from "@/data/team";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Calendar, Eye, Play } from "lucide-react";
import { useState } from "react";

export default function ContentSection() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal();
  const [activeVideo, setActiveVideo] = useState<(typeof highlights)[0] | null>(
    null,
  );

  return (
    <section
      id="content"
      className="py-24 bg-muted/20 relative overflow-hidden"
    >
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
            WATCH & REWATCH
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight text-foreground uppercase">
            Highlights
          </h2>
          <div className="mt-4 mx-auto w-16 h-px bg-accent glow-sm" />
        </div>

        {/* Featured highlight */}
        <FeaturedHighlight highlight={highlights[0]} onPlay={setActiveVideo} />

        {/* Secondary highlights */}
        <div
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
          data-ocid="content.list"
        >
          {highlights.slice(1).map((h, index) => (
            <SmallHighlight
              key={h.id}
              highlight={h}
              index={index}
              onPlay={setActiveVideo}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <Dialog open={!!activeVideo} onOpenChange={() => setActiveVideo(null)}>
        <DialogContent
          className="max-w-3xl bg-card border-border/40"
          data-ocid="content.video_dialog"
        >
          <DialogHeader>
            <DialogTitle className="font-display font-bold tracking-wide text-foreground">
              {activeVideo?.title}
            </DialogTitle>
          </DialogHeader>
          {activeVideo && (
            <div className="aspect-video rounded-sm overflow-hidden mt-2">
              <iframe
                src={`${activeVideo.videoUrl}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function FeaturedHighlight({
  highlight,
  onPlay,
}: {
  highlight: (typeof highlights)[0];
  onPlay: (h: (typeof highlights)[0]) => void;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLButtonElement>();

  return (
    <button
      type="button"
      ref={ref}
      className={`group relative w-full text-left rounded-sm overflow-hidden cursor-pointer card-elevated transition-all duration-700 hover:glow-md ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      onClick={() => onPlay(highlight)}
      data-ocid="content.item.1"
      aria-label={`Play ${highlight.title}`}
    >
      <div className="aspect-video relative overflow-hidden">
        <img
          src={highlight.thumbnail}
          alt={highlight.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center glow-md transition-smooth group-hover:scale-110 group-hover:bg-accent">
            <Play
              size={24}
              className="text-accent-foreground ml-1"
              fill="currentColor"
            />
          </div>
        </div>
        <div className="absolute top-4 left-4 px-3 py-1 bg-accent/90 text-accent-foreground text-xs font-mono font-bold tracking-widest rounded-sm">
          FEATURED
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors">
          {highlight.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">
          {highlight.description}
        </p>
        <div className="flex items-center gap-4 mt-3 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye size={12} /> {highlight.views} views
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {highlight.date}
          </span>
        </div>
      </div>
    </button>
  );
}

function SmallHighlight({
  highlight,
  index,
  onPlay,
}: {
  highlight: (typeof highlights)[0];
  index: number;
  onPlay: (h: (typeof highlights)[0]) => void;
}) {
  const { ref, isVisible } = useScrollReveal<HTMLButtonElement>();

  return (
    <button
      type="button"
      ref={ref}
      className={`group w-full text-left glass-card rounded-sm overflow-hidden cursor-pointer flex gap-0 transition-all duration-500 hover:glow-sm ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
      onClick={() => onPlay(highlight)}
      data-ocid={`content.item.${index + 2}`}
      aria-label={`Play ${highlight.title}`}
    >
      <div className="relative w-40 flex-shrink-0 overflow-hidden">
        <img
          src={highlight.thumbnail}
          alt={highlight.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/40 flex items-center justify-center">
          <div className="w-9 h-9 rounded-full bg-accent/80 flex items-center justify-center transition-smooth group-hover:bg-accent group-hover:scale-110">
            <Play
              size={14}
              className="text-accent-foreground ml-0.5"
              fill="currentColor"
            />
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between min-w-0">
        <div>
          <h3 className="font-display font-bold text-sm text-foreground group-hover:text-accent transition-colors line-clamp-2">
            {highlight.title}
          </h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
            {highlight.description}
          </p>
        </div>
        <div className="flex items-center gap-3 mt-2 text-xs font-mono text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye size={10} /> {highlight.views}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={10} /> {highlight.date}
          </span>
        </div>
      </div>
    </button>
  );
}
