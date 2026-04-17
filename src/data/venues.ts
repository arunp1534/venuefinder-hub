import venue1 from "@/assets/venue-1.jpg";
import venue2 from "@/assets/venue-2.jpg";
import venue3 from "@/assets/venue-3.jpg";
import venue4 from "@/assets/venue-4.jpg";
import venue5 from "@/assets/venue-5.jpg";
import venue6 from "@/assets/venue-6.jpg";
import heroVenue from "@/assets/hero-venue.jpg";

export type VenueType = "Loft" | "Studio" | "Rooftop" | "Meeting" | "Outdoor" | "Warehouse";

export interface Venue {
  id: string;
  title: string;
  location: string;
  city: string;
  type: VenueType;
  capacity: number;
  pricePerHour: number;
  rating: number;
  reviewCount: number;
  image: string;
  gallery: string[];
  amenities: string[];
  host: { name: string; superhost: boolean };
  description: string;
}

export const VENUES: Venue[] = [
  {
    id: "skyline-loft",
    title: "Skyline Loft with Sunset Views",
    location: "SoHo, Manhattan",
    city: "New York",
    type: "Rooftop",
    capacity: 80,
    pricePerHour: 220,
    rating: 4.96,
    reviewCount: 184,
    image: venue1,
    gallery: [venue1, heroVenue, venue5],
    amenities: ["Wi-Fi", "Sound system", "Bar", "Lounge seating", "City views"],
    host: { name: "Amelia", superhost: true },
    description:
      "A sun-drenched rooftop with sweeping skyline views, perfect for cocktail receptions, brand activations, and intimate dinners under the stars.",
  },
  {
    id: "white-studio",
    title: "Minimalist Daylight Photo Studio",
    location: "Williamsburg, Brooklyn",
    city: "New York",
    type: "Studio",
    capacity: 20,
    pricePerHour: 95,
    rating: 4.89,
    reviewCount: 312,
    image: venue2,
    gallery: [venue2, venue3, venue1],
    amenities: ["Natural light", "Backdrops", "Lighting kit", "Hair & makeup", "Wi-Fi"],
    host: { name: "Marcus", superhost: true },
    description:
      "A clean, light-filled studio with northern exposure, seamless backdrops, and professional lighting — built for editorial shoots and content production.",
  },
  {
    id: "library-room",
    title: "Boutique Library Boardroom",
    location: "Mission District",
    city: "San Francisco",
    type: "Meeting",
    capacity: 12,
    pricePerHour: 140,
    rating: 4.92,
    reviewCount: 76,
    image: venue3,
    gallery: [venue3, venue5, venue1],
    amenities: ["Conference setup", "4K display", "Whiteboard", "Espresso bar", "Wi-Fi"],
    host: { name: "Elena", superhost: false },
    description:
      "A handsomely appointed boardroom with leather chairs, exposed brick, and a private espresso bar. Ideal for offsites and executive meetings.",
  },
  {
    id: "garden-pavilion",
    title: "Enchanted Garden Pavilion",
    location: "West Hollywood",
    city: "Los Angeles",
    type: "Outdoor",
    capacity: 120,
    pricePerHour: 380,
    rating: 4.98,
    reviewCount: 241,
    image: venue4,
    gallery: [venue4, venue6, venue1],
    amenities: ["Pergola", "String lights", "Catering kitchen", "Restrooms", "Parking"],
    host: { name: "Sofia", superhost: true },
    description:
      "A romantic outdoor pavilion draped in fairy lights, surrounded by lush landscaping. A dream backdrop for weddings and milestone celebrations.",
  },
  {
    id: "warehouse-hall",
    title: "Industrial Warehouse Event Hall",
    location: "Wynwood",
    city: "Miami",
    type: "Warehouse",
    capacity: 300,
    pricePerHour: 450,
    rating: 4.85,
    reviewCount: 98,
    image: venue5,
    gallery: [venue5, heroVenue, venue4],
    amenities: ["Stage", "Pro AV", "Loading dock", "Green room", "Bar setup"],
    host: { name: "Dario", superhost: false },
    description:
      "A vast, raw industrial space with soaring ceilings and original art installations. Built for galas, fashion shows, and large-scale productions.",
  },
  {
    id: "beach-canopy",
    title: "Oceanfront White Tent Pavilion",
    location: "Malibu Beach",
    city: "Los Angeles",
    type: "Outdoor",
    capacity: 150,
    pricePerHour: 520,
    rating: 4.94,
    reviewCount: 167,
    image: venue6,
    gallery: [venue6, venue4, venue1],
    amenities: ["Beach access", "White tents", "Catering", "Sunset views", "Sound system"],
    host: { name: "Liam", superhost: true },
    description:
      "Pristine white tents on golden sand with the Pacific as your backdrop. Sunset ceremonies and luxury beachside receptions reimagined.",
  },
  {
    id: "industrial-loft",
    title: "Cathedral Loft with Edison Lights",
    location: "DUMBO, Brooklyn",
    city: "New York",
    type: "Loft",
    capacity: 200,
    pricePerHour: 340,
    rating: 4.91,
    reviewCount: 203,
    image: heroVenue,
    gallery: [heroVenue, venue5, venue1],
    amenities: ["Exposed brick", "Edison lighting", "Open floor plan", "Bar", "Sound system"],
    host: { name: "Nora", superhost: true },
    description:
      "A breathtaking cathedral-ceilinged loft with original brick, steel beams, and warm Edison lighting. The quintessential creative event space.",
  },
];

export const VENUE_TYPES: VenueType[] = ["Loft", "Studio", "Rooftop", "Meeting", "Outdoor", "Warehouse"];

export const CITIES = ["All cities", "New York", "Los Angeles", "San Francisco", "Miami"];
