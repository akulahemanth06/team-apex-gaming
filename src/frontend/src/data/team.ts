export interface Player {
  id: string;
  name: string;
  handle: string;
  role: string;
  country: string;
  kdRatio: number;
  winRate: number;
  image: string;
  isFeatured?: boolean;
}

export interface Match {
  id: string;
  opponent: string;
  tournament: string;
  date: string;
  result: "win" | "loss";
  score: string;
  map?: string;
}

export interface Highlight {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  views: string;
  date: string;
}

export const players: Player[] = [
  {
    id: "alpha",
    name: "Marcus Reeves",
    handle: "ALPHA",
    role: "Entry Fragger",
    country: "US",
    kdRatio: 1.62,
    winRate: 72,
    image: "/assets/generated/player-alpha.dim_400x500.jpg",
    isFeatured: true,
  },
  {
    id: "phantom",
    name: "Jake Torres",
    handle: "PHANTOM",
    role: "Rifler",
    country: "CA",
    kdRatio: 1.48,
    winRate: 68,
    image: "/assets/generated/player-phantom.dim_400x500.jpg",
    isFeatured: true,
  },
  {
    id: "vixen",
    name: "Sara Kim",
    handle: "VIXEN",
    role: "AWPer",
    country: "KR",
    kdRatio: 1.55,
    winRate: 70,
    image: "/assets/generated/player-vixen.dim_400x500.jpg",
    isFeatured: true,
  },
  {
    id: "nova",
    name: "Liam Chen",
    handle: "NOVA",
    role: "In-Game Leader",
    country: "SG",
    kdRatio: 1.38,
    winRate: 66,
    image: "/assets/generated/player-nova.dim_400x500.jpg",
    isFeatured: true,
  },
  {
    id: "striker",
    name: "Ethan Walsh",
    handle: "STRIKER",
    role: "Support",
    country: "GB",
    kdRatio: 1.29,
    winRate: 64,
    image: "/assets/generated/player-phantom.dim_400x500.jpg",
  },
];

export const matches: Match[] = [
  {
    id: "m1",
    opponent: "Team Nexus",
    tournament: "ESL Pro League Season 20",
    date: "Apr 14, 2026",
    result: "win",
    score: "16 – 9",
    map: "Mirage",
  },
  {
    id: "m2",
    opponent: "Eclipse Gaming",
    tournament: "BLAST Premier Spring 2026",
    date: "Apr 10, 2026",
    result: "win",
    score: "19 – 17",
    map: "Inferno",
  },
  {
    id: "m3",
    opponent: "Vortex Esports",
    tournament: "IEM Dallas 2026",
    date: "Apr 6, 2026",
    result: "loss",
    score: "11 – 16",
    map: "Nuke",
  },
  {
    id: "m4",
    opponent: "Shadow Wolves",
    tournament: "ESL Pro League Season 20",
    date: "Apr 2, 2026",
    result: "win",
    score: "16 – 12",
    map: "Ancient",
  },
  {
    id: "m5",
    opponent: "Iron Fist",
    tournament: "BLAST Premier Spring 2026",
    date: "Mar 28, 2026",
    result: "win",
    score: "16 – 7",
    map: "Dust2",
  },
  {
    id: "m6",
    opponent: "Crimson League",
    tournament: "IEM Dallas 2026",
    date: "Mar 24, 2026",
    result: "loss",
    score: "13 – 16",
    map: "Vertigo",
  },
];

export const highlights: Highlight[] = [
  {
    id: "h1",
    title: "ALPHA — 1v4 Clutch vs Team Nexus",
    description:
      "Marcus pulls off the impossible clutch in overtime to secure the map win.",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    views: "248K",
    date: "Apr 15, 2026",
  },
  {
    id: "h2",
    title: "VIXEN — 4K Opening Round Highlight",
    description:
      "Sara opens the round with a devastating 4K AWP spray, setting TAG up for a flawless half.",
    thumbnail: "https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw",
    views: "182K",
    date: "Apr 11, 2026",
  },
  {
    id: "h3",
    title: "Team TAG — ESL Pro League Season 20 Recap",
    description:
      "Full match recap of our dominant run through ESL Pro League Group A.",
    thumbnail: "https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
    views: "521K",
    date: "Apr 9, 2026",
  },
];

export const teamStats = {
  wins: 42,
  losses: 11,
  winRate: 79,
  tournaments: 8,
  worldRanking: 5,
};
