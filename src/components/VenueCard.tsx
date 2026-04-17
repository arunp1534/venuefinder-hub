import { Heart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import type { Venue } from "@/data/venues";

interface Props {
  venue: Venue;
  index?: number;
}

export const VenueCard = ({ venue, index = 0 }: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <Link
      to={`/venue/${venue.id}`}
      className="group block animate-fade-up"
      style={{ animationDelay: `${Math.min(index * 60, 480)}ms` }}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-card group-hover:shadow-card-hover transition-smooth">
        <img
          src={venue.image}
          alt={venue.title}
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full h-full object-cover transition-smooth duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />

        {venue.host.superhost && (
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/95 backdrop-blur-sm text-[11px] font-semibold tracking-wide">
            ★ Superhost
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            setLiked(!liked);
          }}
          aria-label="Save venue"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-bounce"
        >
          <Heart
            className={`w-4 h-4 transition-smooth ${
              liked ? "fill-primary stroke-primary" : "stroke-foreground"
            }`}
          />
        </button>

        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-background/95 backdrop-blur-sm text-[11px] font-medium">
          {venue.type}
        </div>
      </div>

      <div className="pt-4 px-1">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-balance group-hover:text-primary transition-smooth">
            {venue.title}
          </h3>
          <div className="flex items-center gap-1 shrink-0 mt-0.5">
            <Star className="w-3.5 h-3.5 fill-foreground stroke-foreground" />
            <span className="text-sm font-medium">{venue.rating}</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {venue.location} · Up to {venue.capacity} guests
        </p>
        <p className="mt-2.5 text-sm">
          <span className="font-semibold text-foreground">${venue.pricePerHour}</span>
          <span className="text-muted-foreground"> / hour</span>
        </p>
      </div>
    </Link>
  );
};
