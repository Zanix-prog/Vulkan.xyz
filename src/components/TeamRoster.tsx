import { useState } from "react";
import { Button } from "./ui/button";

const TeamRoster = () => {
  const [selectedMember, setSelectedMember] = useState<{ name: string; tier: string } | null>(null);

  const members = [
    // HT3 Members
    { name: "HYPERizOP", tier: "HT3" },
    { name: "KillxrW", tier: "HT3" },
    { name: "HerculesTheG0at", tier: "HT3" },
    { name: "ItzEeu", tier: "HT3" },
    { name: "69cent_", tier: "HT3" },
    { name: "Chodubikal", tier: "HT3" },
    { name: "V1per_V1", tier: "HT3" },
    { name: "Fizzlitt", tier: "HT3" },
    { name: "Samradhh", tier: "HT3" },
    { name: "Skiligga", tier: "HT3" },
    { name: "D1xxy", tier: "HT3" },
    { name: "Kartik", tier: "HT3" },

    // LT3 Members
    { name: "Rbcauxe", tier: "LT3" },
    { name: "xKazuto", tier: "LT3" },
    { name: "sssaaamm_alt1", tier: "LT3" },
    { name: "Karyl", tier: "LT3" },
    { name: "KingGyro", tier: "LT3" },
    { name: "Prax", tier: "LT3" },
    { name: "Sn0w", tier: "LT3" },
    { name: "StevePubgYT", tier: "LT3" },
    { name: "CrystalUwU", tier: "LT3" },
    { name: "qhexxi", tier: "LT3" },
    { name: "YellowFl4sh", tier: "LT3" },
    { name: "Rynoxx", tier: "LT3" },
    { name: "Vinziety", tier: "LT3" },
    { name: "0xPH0SIS", tier: "LT3" },
    { name: "Ripjust", tier: "LT3" },
    { name: "Vexqrds", tier: "LT3" },
    { name: "Tacoitalian", tier: "LT3" },
    { name: "D4vil", tier: "LT3" },
    { name: "SparkyTheGoat", tier: "LT3" },
  ];

  return (
    <section id="roster" className="relative py-32 px-6 bg-black/50">
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black font-[Orbitron] text-glow-secondary mb-6">
            <span className="bg-gradient-gaming bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              THE ROSTER
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            31 elite warriors. One unstoppable force. Meet the legends who define VULKANS.
          </p>
        </div>

        {/* Player Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {members.map((member, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover-lift transform-3d cursor-pointer group relative overflow-hidden"
              onClick={() => setSelectedMember(member)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="absolute inset-0 bg-gradient-holographic opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

              <div className="relative mb-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-gaming opacity-50 blur-xl absolute inset-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-20 h-20 mx-auto rounded-full border-2 holographic-border flex items-center justify-center bg-card/50 backdrop-blur relative">
                  <span className="text-2xl font-black font-[Orbitron] text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="text-center">
                <h3 className="font-bold font-[Orbitron] text-foreground text-sm mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <div className="text-xs text-muted-foreground">
                  ID: #{String(index + 1).padStart(3, "0")}
                </div>
              </div>

              <div className="absolute top-0 right-0 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedMember && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
            onClick={() => setSelectedMember(null)}
          >
            <div
              className="glass-card p-12 rounded-2xl max-w-2xl w-full holographic-border relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="text-center space-y-6">
                {/* Avatar */}
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-volcanic rounded-full blur-2xl opacity-50 animate-pulse-glow" />
                  <div className="relative w-full h-full rounded-full border-4 holographic-border flex items-center justify-center bg-card/50 backdrop-blur">
                    <span className="text-6xl font-black font-[Orbitron] text-primary">
                      {selectedMember.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Name + Tier */}
                <div>
                  <h3 className="text-4xl font-black font-[Orbitron] text-glow-primary mb-2">
                    {selectedMember.name}
                  </h3>

                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-[Orbitron] text-primary">
                      {selectedMember.tier}
                    </span>
                  </div>
                </div>

                {/* Stats (unchanged) */}
                <div className="grid grid-cols-3 gap-4 py-6">
                  <div className="glass-card p-4 rounded-xl">
                    <div className="text-2xl font-black text-primary">A+</div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl">
                    <div className="text-2xl font-black text-secondary">∞</div>
                    <div className="text-xs text-muted-foreground">Potential</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl">
                    <div className="text-2xl font-black text-primary">{selectedMember.tier}</div>
                    <div className="text-xs text-muted-foreground">Tier</div>
                  </div>
                </div>

                <Button
                  className="w-full bg-gradient-volcanic hover:scale-105 transition-all font-[Orbitron] font-bold"
                  onClick={() => setSelectedMember(null)}
                >
                  CLOSE TRANSMISSION
                </Button>
              </div>

              <div className="scanline absolute inset-0 pointer-events-none rounded-2xl" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamRoster;
