import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Star, MapPin, Users, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { VENUES } from "@/data/venues";

const VenueDetail = () => {
  const { id } = useParams();
  const venue = VENUES.find((v) => v.id === id);

  useEffect(() => {
    if (venue) {
      document.title = `${venue.title} · ${venue.city} — SpotVenue`;
    }
    window.scrollTo({ top: 0 });
  }, [venue]);

  if (!venue) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center gap-4 container py-32">
          <h1 className="font-display text-3xl">Venue not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Back to all venues
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-28 pb-16">
        <div className="container">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth mb-6">
            <ArrowLeft className="w-4 h-4" />
            All venues
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 animate-fade-up">
            <div>
              <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-balance max-w-3xl">
                {venue.title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5 text-foreground font-medium">
                  <Star className="w-4 h-4 fill-foreground" />
                  {venue.rating} · {venue.reviewCount} reviews
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {venue.location}, {venue.city}
                </span>
                {venue.host.superhost && (
                  <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    ★ Superhost
                  </span>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-full gap-2">
                <Share2 className="w-4 h-4" /> Share
              </Button>
              <Button variant="outline" size="sm" className="rounded-full gap-2">
                <Heart className="w-4 h-4" /> Save
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 rounded-3xl overflow-hidden mb-12 animate-fade-up [animation-delay:120ms]">
            <div className="md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto">
              <img src={venue.gallery[0]} alt={venue.title} className="w-full h-full object-cover" />
            </div>
            <div className="hidden md:block aspect-square">
              <img src={venue.gallery[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="hidden md:block aspect-square">
              <img src={venue.gallery[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="hidden md:block aspect-square">
              <img src={venue.gallery[1]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="hidden md:block aspect-square">
              <img src={venue.gallery[2]} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 animate-fade-up [animation-delay:240ms]">
            <div>
              <div className="flex items-start justify-between pb-8 border-b border-border">
                <div>
                  <h2 className="font-display text-2xl font-semibold">
                    Hosted by {venue.host.name}
                  </h2>
                  <p className="mt-1 text-muted-foreground">
                    {venue.type} · Up to {venue.capacity} guests
                  </p>
                </div>
                <div className="w-14 h-14 rounded-full bg-gradient-warm flex items-center justify-center text-primary-foreground font-display text-xl font-semibold shadow-elegant">
                  {venue.host.name[0]}
                </div>
              </div>

              <div className="py-8 border-b border-border">
                <p className="text-base leading-relaxed text-foreground/85">
                  {venue.description}
                </p>
              </div>

              <div className="py-8 border-b border-border">
                <h3 className="font-display text-xl font-semibold mb-5">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {venue.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-3 py-2">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Check className="w-4 h-4 text-primary" strokeWidth={2.5} />
                      </div>
                      <span className="text-sm">{a}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-8">
                <h3 className="font-display text-xl font-semibold mb-2">Capacity</h3>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  Comfortably hosts up to <span className="font-semibold text-foreground">{venue.capacity}</span> guests
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 self-start">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card-hover">
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-display text-3xl font-semibold">${venue.pricePerHour}</span>
                  <span className="text-muted-foreground">/ hour</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-3.5 h-3.5 fill-foreground" />
                  <span className="font-medium">{venue.rating}</span>
                  <span className="text-muted-foreground">· {venue.reviewCount} reviews</span>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-border p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Date</div>
                    <div className="text-sm font-medium mt-0.5">Add date</div>
                  </div>
                  <div className="rounded-xl border border-border p-3">
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Hours</div>
                    <div className="text-sm font-medium mt-0.5">4 hours</div>
                  </div>
                </div>
                <div className="mt-2 rounded-xl border border-border p-3">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Guests</div>
                  <div className="text-sm font-medium mt-0.5">1 guest</div>
                </div>

                <Button
                  size="lg"
                  className="w-full mt-5 rounded-xl bg-gradient-warm text-primary-foreground shadow-elegant hover:shadow-card-hover hover:scale-[1.01] transition-bounce font-semibold h-12"
                >
                  Request to book
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  You won't be charged yet
                </p>

                <div className="mt-5 pt-5 border-t border-border space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground underline">${venue.pricePerHour} × 4 hours</span>
                    <span>${venue.pricePerHour * 4}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground underline">Service fee</span>
                    <span>${Math.round(venue.pricePerHour * 0.12)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-border font-semibold">
                    <span>Total</span>
                    <span>${venue.pricePerHour * 4 + Math.round(venue.pricePerHour * 0.12)}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default VenueDetail;
