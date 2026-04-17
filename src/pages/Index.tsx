import { useMemo, useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FilterBar } from "@/components/FilterBar";
import { VenueCard } from "@/components/VenueCard";
import { Footer } from "@/components/Footer";
import { VENUES, type VenueType } from "@/data/venues";

const Index = () => {
  const [type, setType] = useState<VenueType | "All">("All");

  useEffect(() => {
    document.title = "SpotVenue — Book unique venues for events, shoots & meetings";
    const meta = document.querySelector('meta[name="description"]');
    const desc = "Discover and book hand-picked lofts, studios, rooftops and gardens by the hour. Spaces with character for events, shoots, and gatherings.";
    if (meta) meta.setAttribute("content", desc);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = desc;
      document.head.appendChild(m);
    }
  }, []);

  const filtered = useMemo(
    () => (type === "All" ? VENUES : VENUES.filter((v) => v.type === type)),
    [type]
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FilterBar active={type} onChange={setType} />

        <section className="container py-12 md:py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {type === "All" ? "Featured spaces" : `${type} venues`}
              </h2>
              <p className="mt-2 text-muted-foreground">
                {filtered.length} {filtered.length === 1 ? "venue" : "venues"} curated for you
              </p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center">
              <p className="text-muted-foreground">No venues match this filter yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              {filtered.map((v, i) => (
                <VenueCard key={v.id} venue={v} index={i} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
