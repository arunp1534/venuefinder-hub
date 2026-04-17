import { Building2, Camera, Sun, Briefcase, Trees, Warehouse, SlidersHorizontal } from "lucide-react";
import { VENUE_TYPES, type VenueType } from "@/data/venues";
import { Button } from "@/components/ui/button";

const ICONS: Record<VenueType, React.ReactNode> = {
  Loft: <Building2 className="w-5 h-5" />,
  Studio: <Camera className="w-5 h-5" />,
  Rooftop: <Sun className="w-5 h-5" />,
  Meeting: <Briefcase className="w-5 h-5" />,
  Outdoor: <Trees className="w-5 h-5" />,
  Warehouse: <Warehouse className="w-5 h-5" />,
};

interface Props {
  active: VenueType | "All";
  onChange: (t: VenueType | "All") => void;
}

export const FilterBar = ({ active, onChange }: Props) => {
  const all: (VenueType | "All")[] = ["All", ...VENUE_TYPES];
  return (
    <div className="sticky top-20 z-30 bg-background/85 backdrop-blur-xl border-b border-border/60">
      <div className="container py-5 flex items-center gap-4">
        <div className="flex-1 flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-1 px-1">
          {all.map((type) => {
            const isActive = active === type;
            return (
              <button
                key={type}
                onClick={() => onChange(type)}
                className={`flex flex-col items-center gap-1.5 px-4 py-2 rounded-xl shrink-0 transition-smooth border-b-2 ${
                  isActive
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                <div className={`transition-smooth ${isActive ? "scale-110" : ""}`}>
                  {type === "All" ? <SlidersHorizontal className="w-5 h-5" /> : ICONS[type as VenueType]}
                </div>
                <span className="text-xs font-medium whitespace-nowrap">{type}</span>
              </button>
            );
          })}
        </div>
        <Button variant="outline" className="rounded-full gap-2 hidden sm:inline-flex shrink-0">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </Button>
      </div>
    </div>
  );
};
