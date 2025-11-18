const AboutSection = () => {
  const timeline = [
    { year: "September 2025", event: "Foundation", desc: "Vulkans officially formed — built for Indian MC domination" },
    { year: "October 2025", event: "First Impact", desc: "Team enters the scene and starts shaking up local lobbies" },
    { year: "November 2025", event: "Breakthrough", desc: "Roster stabilizes, early scrims show top-tier potential" },
    { year: "Start Of November 2025", event: "Recognition", desc: "Indian PvP community starts noticing Vulkans’ rise" },
    { year: "Now", event: "Strong showings across tournaments and clan wars" },
  ];

  return (
    <section id="about" className="relative min-h-screen py-32 px-6 particle-bg">
      {/* Background gradient orbs */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black font-[Orbitron] text-glow-primary mb-6">
            <span className="bg-gradient-gaming bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              THE VULKANS LEGACY
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An elite collective forged through countless battles, united by excellence, 
            driven by an insatiable hunger for dominance. We don't just play — we redefine the game.
          </p>
        </div>

        {/* Lore content */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-card p-8 rounded-2xl hover-lift space-y-4">
            <div className="text-5xl mb-4">🌋</div>
            <h3 className="text-3xl font-bold font-[Orbitron] text-primary">Our Origin</h3>
            <p className="text-muted-foreground leading-relaxed">
              Like a volcano erupting from the depths, VULKANS emerged as an unstoppable force. 
              What started as a vision became a movement. What began as passion evolved into mastery. 
              We are the fusion of skill, strategy, and relentless determination.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-lift space-y-4">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-3xl font-bold font-[Orbitron] text-secondary">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To dominate Indian Crystal PvP with precision, discipline, and innovation.
              To push the limits of skill and strategy.
              To become the name players fear before the fight even begins.
              We don’t adapt to the meta — the meta adapts to us.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <h3 className="text-4xl font-bold font-[Orbitron] text-center mb-16 text-glow-secondary">
            <span className="bg-gradient-cyber bg-clip-text text-transparent">
              TIMELINE OF DOMINANCE
            </span>
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary" />
            
            {/* Timeline events */}
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="glass-card p-6 rounded-xl hover-lift inline-block">
                      <div className="text-3xl font-black font-[Orbitron] text-glow-primary mb-2">
                        {item.year}
                      </div>
                      <div className="text-xl font-bold text-foreground mb-1">
                        {item.event}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_rgba(255,107,0,0.8)]" />
                  </div>
                  
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scanline overlay */}
      <div className="scanline absolute inset-0 pointer-events-none" />
    </section>
  );
};

export default AboutSection;
