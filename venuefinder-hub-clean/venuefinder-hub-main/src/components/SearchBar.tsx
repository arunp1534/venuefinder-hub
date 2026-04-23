import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const SearchBar = () => {
  return (
    <div className="bg-background/95 backdrop-blur-xl rounded-2xl md:rounded-full shadow-card-hover border border-border/60 p-2 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_auto] gap-1 items-center">
        <Field icon={<MapPin className="w-4 h-4" />} label="Where" value="Anywhere" />
        <Divider />
        <Field icon={<Calendar className="w-4 h-4" />} label="When" value="Add dates" />
        <Divider />
        <Field icon={<Users className="w-4 h-4" />} label="Guests" value="Add guests" />
        <Button
          size="lg"
          className="rounded-full bg-gradient-warm text-primary-foreground shadow-elegant hover:shadow-card-hover hover:scale-[1.02] transition-bounce gap-2 h-14 px-6 md:px-8"
        >
          <Search className="w-5 h-5" strokeWidth={2.5} />
          <span className="font-semibold">Search</span>
        </Button>
      </div>
    </div>
  );
};

const Field = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <button className="text-left px-5 py-3 rounded-full hover:bg-accent/60 transition-smooth group">
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-0.5">
      <span className="text-primary/70">{icon}</span>
      {label}
    </div>
    <div className="text-sm font-medium text-foreground/90 group-hover:text-foreground">{value}</div>
  </button>
);

const Divider = () => (
  <div className="hidden md:block h-8 w-px bg-border/60" />
);
