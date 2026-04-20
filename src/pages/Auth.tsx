import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles, Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import authPoster from "@/assets/auth-poster.jpg";
import authVideo from "@/assets/auth-background.mp4";

type Mode = "login" | "signup";

const Auth = () => {
  const [mode, setMode] = useState<Mode>("login");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const switchMode = (next: Mode) => {
    if (next === mode) return;
    setMode(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(
      mode === "login" ? "Welcome back to SpotVenue" : "Your story begins now",
      { description: "Auth wiring coming with Lovable Cloud." }
    );
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0b0807] text-white">
      {/* Cinematic background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={authVideo}
        poster={authPoster}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Warm color wash + dark gradient overlay for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,10,5,0.35)_0%,_rgba(8,5,3,0.85)_85%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,_rgba(0,0,0,0.55)_0%,_transparent_45%,_transparent_55%,_rgba(0,0,0,0.45)_100%)]" />

      {/* Top brand bar */}
      <header className="relative z-20">
        <div className="container flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-warm flex items-center justify-center shadow-elegant group-hover:scale-105 transition-bounce">
              <Sparkles className="w-5 h-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="font-display text-2xl font-semibold tracking-tight text-white">
              SpotVenue
            </span>
          </Link>
          <button
            onClick={() => navigate("/")}
            className="text-sm font-medium text-white/70 hover:text-white transition-colors tracking-wide"
          >
            Back to discover
          </button>
        </div>
      </header>

      {/* Content grid */}
      <section className="relative z-10 container grid lg:grid-cols-[1.1fr_minmax(380px,460px)] gap-12 lg:gap-20 items-center min-h-[calc(100vh-5rem)] py-12">
        {/* Left — overlay quote */}
        <div className="text-center lg:text-left max-w-xl mx-auto lg:mx-0 animate-fade-up">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.4em] text-[#e8c98a]/90 mb-6">
            A film, a venue, a memory
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.75rem] leading-[1.08] tracking-tight font-light text-white text-balance">
            Every story deserves to be{" "}
            <span className="italic text-transparent bg-clip-text bg-[linear-gradient(120deg,#f4d59a,#e8b573,#f4d59a)]">
              captured like a dream.
            </span>{" "}
            <span className="block mt-2 font-normal">Begin yours.</span>
          </h1>
          <p className="mt-7 text-base md:text-lg text-white/70 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            Hand-picked venues for shoots, weddings, and the moments
            in-between. Made for storytellers.
          </p>
        </div>

        {/* Right — auth card */}
        <div
          key={mode}
          className="relative animate-scale-in"
        >
          {/* Soft glow */}
          <div className="absolute -inset-px rounded-[28px] bg-[linear-gradient(140deg,rgba(244,213,154,0.45),rgba(255,255,255,0.05)_40%,rgba(232,181,115,0.35))] blur-[2px] opacity-80" />
          <div className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(circle_at_30%_20%,rgba(244,180,120,0.25),transparent_60%)] blur-2xl pointer-events-none" />

          <div className="relative rounded-[26px] border border-white/15 bg-white/[0.06] backdrop-blur-2xl p-8 md:p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
            {/* Tab switcher */}
            <div className="relative grid grid-cols-2 p-1 rounded-full bg-white/10 border border-white/10 mb-8 text-sm font-medium">
              <span
                className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white text-black transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)]"
                style={{ left: mode === "login" ? "4px" : "calc(50% + 0px)" }}
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => switchMode("login")}
                className={`relative z-10 py-2.5 rounded-full transition-colors duration-300 ${
                  mode === "login" ? "text-black" : "text-white/80"
                }`}
              >
                Log in
              </button>
              <button
                type="button"
                onClick={() => switchMode("signup")}
                className={`relative z-10 py-2.5 rounded-full transition-colors duration-300 ${
                  mode === "signup" ? "text-black" : "text-white/80"
                }`}
              >
                Sign up
              </button>
            </div>

            <div className="mb-7">
              <h2 className="font-display text-3xl font-medium tracking-tight text-white">
                {mode === "login" ? "Welcome back" : "Create your account"}
              </h2>
              <p className="text-sm text-white/60 mt-1.5 font-light">
                {mode === "login"
                  ? "Sign in to continue your story."
                  : "Start discovering venues worth remembering."}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div className="space-y-1.5 animate-fade-up">
                  <Label htmlFor="name" className="text-white/80 text-xs font-medium tracking-wide">
                    Full name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Aarav Mehta"
                      required
                      className="pl-10 h-12 rounded-xl bg-white/5 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-[#e8b573] focus-visible:ring-offset-0 focus-visible:border-white/30"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-white/80 text-xs font-medium tracking-wide">
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

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-white/80 text-xs font-medium tracking-wide">
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
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-12 rounded-xl bg-white text-black hover:bg-white/90 font-medium text-sm tracking-wide shadow-[0_8px_30px_-8px_rgba(255,255,255,0.4)] group"
              >
                {mode === "login" ? "Log in" : "Create account"}
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </Button>

              <div className="relative py-1">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/15" />
                </div>
                <div className="relative flex justify-center text-[11px] uppercase tracking-[0.3em]">
                  <span className="px-3 bg-transparent text-white/45">or</span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/")}
                className="w-full h-12 rounded-xl bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white font-medium text-sm tracking-wide"
              >
                Explore as a guest
              </Button>
            </form>

            <p className="mt-6 text-center text-xs text-white/45 font-light">
              {mode === "login" ? (
                <>
                  New to SpotVenue?{" "}
                  <button
                    onClick={() => switchMode("signup")}
                    className="text-[#e8c98a] hover:text-white transition-colors font-medium"
                  >
                    Create an account
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
    </main>
  );
};

export default Auth;
