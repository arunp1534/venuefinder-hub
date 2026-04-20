import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Mail,
  Lock,
  ArrowRight,
  Eye,
  EyeOff,
  ArrowLeft,
  Search,
  CalendarCheck,
  Clapperboard,
  Heart,
  Camera,
  Users,
  PartyPopper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import AuthBackground from "@/components/AuthBackground";

type Mode = "login" | "signup";

const Auth = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [mode, setMode] = useState<Mode>("signup");
  const [showPassword, setShowPassword] = useState(false);
  const [withPassword, setWithPassword] = useState(false);
  const navigate = useNavigate();
  const authSectionRef = useRef<HTMLElement>(null);

  const openAuth = (next: Mode = "signup") => {
    setMode(next);
    setWithPassword(next === "login");
    setShowAuth(true);
    // Smoothly bring auth card into view on smaller screens
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const closeAuth = () => {
    setShowAuth(false);
    setWithPassword(false);
  };

  const switchMode = (next: Mode) => {
    if (next === mode) return;
    setMode(next);
    setWithPassword(next === "login");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      mode === "login" ? "Welcome back to SpotVenue" : "Your story begins now",
      { description: "Auth wiring coming with Lovable Cloud." }
    );
  };

  const scrollToHowItWorks = () => {
    document
      .getElementById("how-it-works")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative w-full bg-[#0b0807] text-white">
      {/* FIXED cinematic background — persists across the entire scroll & auth */}
      <div className="fixed inset-0 z-0">
        <AuthBackground zoomed={showAuth} />

        {/* Warm color wash + dark gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,10,5,0.35)_0%,_rgba(8,5,3,0.85)_85%)]" />
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            showAuth
              ? "bg-gradient-to-b from-black/65 via-black/55 to-black/80 backdrop-blur-[2px]"
              : "bg-gradient-to-b from-black/55 via-black/35 to-black/80"
          }`}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,_rgba(0,0,0,0.55)_0%,_transparent_45%,_transparent_55%,_rgba(0,0,0,0.45)_100%)]" />
      </div>

      {/* Top brand bar */}
      <header className="relative z-30">
        <div className="container flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-warm flex items-center justify-center shadow-elegant group-hover:scale-105 transition-bounce">
              <Sparkles className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-semibold tracking-tight text-white">
              SpotVenue
            </span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={() => navigate("/")}
              className="hidden sm:inline text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
            >
              Browse venues
            </button>
            {!showAuth && (
              <Button
                onClick={() => openAuth("login")}
                variant="outline"
                className="h-10 px-5 rounded-full bg-white/5 backdrop-blur-md border-white/25 text-white hover:bg-white/15 hover:text-white text-sm"
              >
                Log in
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* CINEMATIC LANDING (hidden once auth opens) */}
      {!showAuth && (
        <>
          {/* SECTION 1 — HERO */}
          <section className="relative z-10 container flex flex-col items-center justify-center text-center min-h-[calc(100vh-5rem)] py-12 animate-fade-in">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[#e8c98a]/90 mb-8">
              Spaces by the hour · India
            </p>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-light text-white text-balance max-w-4xl">
              Book spaces.{" "}
              <span className="italic text-transparent bg-clip-text bg-[linear-gradient(120deg,#f4d59a,#e8b573,#f4d59a)]">
                Create moments.
              </span>
            </h1>
            <p className="mt-8 text-base md:text-lg text-white/75 font-light leading-relaxed max-w-xl">
              Discover unique venues for shoots, meetings, and unforgettable
              experiences — all in one place.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button
                onClick={() => openAuth("signup")}
                className="h-13 px-8 py-3 rounded-full bg-white text-black hover:bg-white/90 font-medium text-sm tracking-wide shadow-[0_8px_30px_-8px_rgba(255,255,255,0.5)] group"
              >
                Start Creating
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="h-13 px-8 py-3 rounded-full bg-white/5 backdrop-blur-md border-white/25 text-white hover:bg-white/15 hover:text-white font-medium text-sm tracking-wide"
              >
                Explore Spaces
              </Button>
            </div>

            <button
              onClick={scrollToHowItWorks}
              className="mt-16 text-xs uppercase tracking-[0.3em] text-white/50 hover:text-white/90 transition-colors animate-fade-in [animation-delay:600ms]"
            >
              Scroll to discover ↓
            </button>
          </section>

          {/* SECTION 2 — HOW IT WORKS */}
          <section
            id="how-it-works"
            className="relative z-10 container py-24 md:py-32"
          >
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[#e8c98a]/90 mb-5">
                How it works
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-white text-balance">
                From idea to experience{" "}
                <span className="italic text-[#f4d59a]">in minutes.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Search,
                  step: "01",
                  title: "Discover",
                  desc: "Browse hand-picked spaces — lofts, studios, rooftops, gardens — across India.",
                },
                {
                  icon: CalendarCheck,
                  step: "02",
                  title: "Book",
                  desc: "Pick your hours, confirm instantly. Transparent pricing, no surprises.",
                },
                {
                  icon: Clapperboard,
                  step: "03",
                  title: "Create",
                  desc: "Show up and bring your vision to life — shoots, meetings, celebrations.",
                },
              ].map(({ icon: Icon, step, title, desc }, i) => (
                <div
                  key={title}
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-7 md:p-8 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
                  style={{ animationDelay: `${i * 120}ms` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-gradient-warm flex items-center justify-center shadow-elegant">
                      <Icon className="w-5 h-5 text-primary-foreground" strokeWidth={2} />
                    </div>
                    <span className="font-display text-xs font-medium tracking-[0.3em] text-white/40">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-medium text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 3 — USE CASES */}
          <section className="relative z-10 container py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[#e8c98a]/90 mb-5">
                Made for every story
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-light tracking-tight text-white text-balance">
                One platform.{" "}
                <span className="italic text-[#f4d59a]">Every kind of moment.</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
              {[
                {
                  icon: Heart,
                  title: "Wedding & pre-wedding shoots",
                  desc: "Heritage havelis, blooming gardens, sunlit terraces.",
                },
                {
                  icon: Camera,
                  title: "Content & reel shoots",
                  desc: "Studios, lofts and natural-light sets ready for cameras.",
                },
                {
                  icon: Users,
                  title: "Team meetings & workshops",
                  desc: "Inspiring rooms for offsites, brainstorms, and away-days.",
                },
                {
                  icon: PartyPopper,
                  title: "Private events & celebrations",
                  desc: "Rooftops, lounges, and dining spaces with character.",
                },
              ].map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-500"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center mb-5">
                    <Icon className="w-4.5 h-4.5 text-[#f4d59a]" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-display text-lg font-medium text-white mb-1.5 leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed font-light">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="relative z-10 container py-24 md:py-36">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-light tracking-tight text-white text-balance leading-[1.1]">
                Your next space is just a{" "}
                <span className="italic text-transparent bg-clip-text bg-[linear-gradient(120deg,#f4d59a,#e8b573,#f4d59a)]">
                  click away.
                </span>
              </h2>
              <p className="mt-6 text-base md:text-lg text-white/70 font-light max-w-xl mx-auto">
                Join the storytellers, founders and creators booking India's most
                beautiful spaces by the hour.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button
                  onClick={() => openAuth("signup")}
                  className="h-13 px-9 py-3 rounded-full bg-white text-black hover:bg-white/90 font-medium text-sm tracking-wide shadow-[0_8px_30px_-8px_rgba(255,255,255,0.5)] group"
                >
                  Start Your Journey
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <button
                  onClick={() => openAuth("login")}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
                >
                  Already a member? Log in →
                </button>
              </div>
            </div>

            {/* Footer line */}
            <div className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
              <span>© {new Date().getFullYear()} SpotVenue · Made in India</span>
              <span className="tracking-wide uppercase">Spaces by the hour</span>
            </div>
          </section>
        </>
      )}

      {/* AUTH CARD STATE */}
      {showAuth && (
        <section
          ref={authSectionRef}
          className="relative z-10 container flex items-center justify-center min-h-[calc(100vh-5rem)] py-12"
        >
          <div
            key={mode}
            className="relative w-full max-w-[460px] animate-scale-in"
          >
            {/* Soft glow */}
            <div className="absolute -inset-px rounded-[28px] bg-[linear-gradient(140deg,rgba(244,213,154,0.45),rgba(255,255,255,0.05)_40%,rgba(232,181,115,0.35))] blur-[2px] opacity-80" />
            <div className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(244,180,120,0.25),transparent_60%)] blur-2xl pointer-events-none" />

            <div className="relative rounded-[26px] border border-white/15 bg-white/[0.06] backdrop-blur-2xl p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              {/* Back button */}
              <button
                onClick={closeAuth}
                className="absolute top-5 left-5 flex items-center gap-1.5 text-xs font-medium text-white/60 hover:text-white transition-colors group"
                aria-label="Back to landing"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                Back
              </button>

              <div className="mb-7 mt-6 text-center">
                <h2 className="font-display text-3xl font-medium tracking-tight text-white">
                  {mode === "login" ? "Log in to your account" : "Start your journey"}
                </h2>
                <p className="text-sm text-white/60 mt-1.5 font-light">
                  {mode === "login"
                    ? "Welcome back — pick up where you left off."
                    : "Create an account to book spaces by the hour."}
                </p>
              </div>

              {/* Social buttons */}
              <div className="space-y-2.5 mb-5">
                <button
                  type="button"
                  onClick={() =>
                    toast.info("Google sign-in coming with Lovable Cloud")
                  }
                  className="w-full h-11 rounded-xl bg-white text-black hover:bg-white/90 font-medium text-sm tracking-wide flex items-center justify-center gap-2.5 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
                <button
                  type="button"
                  onClick={() =>
                    toast.info("Apple sign-in coming with Lovable Cloud")
                  }
                  className="w-full h-11 rounded-xl bg-white/[0.08] border border-white/15 text-white hover:bg-white/[0.14] font-medium text-sm tracking-wide flex items-center justify-center gap-2.5 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  Continue with Apple
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-5">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  or
                </span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="email"
                    className="text-white/80 text-xs font-medium tracking-wide"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@studio.com"
                      required
                      className="pl-10 h-12 rounded-xl bg-white/5 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-[#e8b573] focus-visible:ring-offset-0 focus-visible:border-white/30"
                    />
                  </div>
                </div>

                {withPassword && (
                  <div className="space-y-1.5 animate-fade-in">
                    <div className="flex items-center justify-between">
                      <Label
                        htmlFor="password"
                        className="text-white/80 text-xs font-medium tracking-wide"
                      >
                        Password
                      </Label>
                      {mode === "login" && (
                        <button
                          type="button"
                          className="text-xs text-white/60 hover:text-[#e8c98a] transition-colors"
                        >
                          Forgot?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        minLength={6}
                        className="pl-10 pr-10 h-12 rounded-xl bg-white/5 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-[#e8b573] focus-visible:ring-offset-0 focus-visible:border-white/30"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((s) => !s)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff className="w-4 h-4" />
                        ) : (
                          <Eye className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                <Button
                  type={withPassword ? "submit" : "button"}
                  onClick={
                    withPassword ? undefined : () => setWithPassword(true)
                  }
                  className="w-full h-12 rounded-xl bg-white text-black hover:bg-white/90 font-medium text-sm tracking-wide shadow-[0_8px_30px_-8px_rgba(255,255,255,0.4)] group"
                >
                  {mode === "login"
                    ? "Log in"
                    : withPassword
                    ? "Create account"
                    : "Continue with email"}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </form>

              <p className="mt-6 text-center text-xs text-white/45 font-light">
                {mode === "login" ? (
                  <>
                    New here?{" "}
                    <button
                      onClick={() => switchMode("signup")}
                      className="text-[#e8c98a] hover:text-white transition-colors font-medium"
                    >
                      Start your journey
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      onClick={() => switchMode("login")}
                      className="text-[#e8c98a] hover:text-white transition-colors font-medium"
                    >
                      Log in
                    </button>
                  </>
                )}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Auth;
