import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onDetail = location.pathname.startsWith("/venue");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isOpaque = scrolled || onDetail;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isOpaque
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-warm flex items-center justify-center shadow-elegant group-hover:scale-105 transition-bounce">
            <Sparkles className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="font-display text-2xl font-semibold tracking-tight">
            SpotVenue
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth"
          >
            Discover
          </Link>
          <a className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth cursor-pointer">
            Experiences
          </a>
          <a className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-smooth cursor-pointer">
            Inspiration
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:inline-flex rounded-full font-medium" asChild>
            <Link to="/auth">Sign in</Link>
          </Button>
          <Button variant="outline" className="rounded-full border-border/80 hover:shadow-card transition-smooth gap-2 pl-3 pr-1.5 py-1.5 h-auto" asChild>
            <Link to="/auth">
              <Menu className="w-4 h-4" />
              <span className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-semibold">
                SV
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
