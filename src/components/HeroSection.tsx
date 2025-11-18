import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe 
          src='https://my.spline.design/claritystream-qWUJ5n1loSM2Sqd6aQDoqCk3/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="absolute inset-0"
          title="VULKANS 3D Scene"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-12 px-6 max-w-7xl mx-auto">
        {/* Title with gaming aesthetic */}
        <div className="space-y-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-gaming rounded-lg blur-3xl opacity-60 animate-pulse-glow" />
            <h1 className="relative text-8xl md:text-[12rem] font-black font-[Orbitron] text-glow-strong leading-none">
              <span className="bg-gradient-gaming bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
                VULKANS
              </span>
            </h1>
          </div>
          
          <p className="text-2xl md:text-4xl font-bold text-foreground/95 font-[Orbitron] tracking-wider drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            Forged in fire. Built to dominate.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-lg text-muted-foreground font-[Orbitron] tracking-widest uppercase">
              Elite Gaming Guild
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </div>
        </div>

        {/* CTA Button - Gaming style */}
        <div className="relative group mt-8">
          <div className="absolute inset-0 bg-gradient-gaming rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
          <Button
            size="lg"
            className="relative px-14 py-8 text-xl font-bold font-[Orbitron] bg-gradient-gaming hover:scale-105 transition-all duration-300 rounded-full border-2 border-primary/50 shadow-[0_0_40px_rgba(168,85,247,0.6)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)]"
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            ENTER THE REALM
          </Button>
        </div>

        {/* Gaming stats cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-16">
          {[
            { label: "31", sublabel: "Elite Warriors" },
            { label: "∞", sublabel: "Domination" },
            { label: "#1", sublabel: "Guild" },
          ].map((stat, i) => (
            <div
              key={i}
              className="glass-card p-8 rounded-2xl hover-lift border border-primary/20 backdrop-blur-xl"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-5xl font-black font-[Orbitron] text-glow-primary bg-gradient-gaming bg-clip-text text-transparent">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground mt-3 font-[Orbitron] uppercase tracking-wider">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-primary/60 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-background/20">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
