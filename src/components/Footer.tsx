import { Sparkles } from "lucide-react";

export const Footer = () => {
  const sections = [
    {
      title: "Discover",
      links: ["Browse venues", "Cities", "Experiences", "Gift cards"],
    },
    {
      title: "Hosting",
      links: ["List your space", "Host resources", "Community", "Insurance"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Press", "Contact"],
    },
  ];

  return (
    <footer className="mt-32 border-t border-border bg-secondary/40">
      <div className="container py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-warm flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
              </div>
              <span className="font-display text-2xl font-semibold">SpotVenue</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              The marketplace for venues with character. Book by the hour, host without friction.
            </p>
          </div>
          {sections.map((s) => (
            <div key={s.title}>
              <h4 className="font-display text-sm font-semibold mb-4">{s.title}</h4>
              <ul className="space-y-3">
                {s.links.map((l) => (
                  <li key={l}>
                    <a className="text-sm text-muted-foreground hover:text-foreground transition-smooth cursor-pointer">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2025 SpotVenue. Crafted for spaces worth booking.</p>
          <div className="flex gap-6">
            <a className="hover:text-foreground transition-smooth cursor-pointer">Privacy</a>
            <a className="hover:text-foreground transition-smooth cursor-pointer">Terms</a>
            <a className="hover:text-foreground transition-smooth cursor-pointer">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
