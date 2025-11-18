import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const JoinSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    ign: "",
    playtime: "",
    tier: "",
    reason: "",
    discord: "",
  });

  const GOOGLE_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSezMwARbglbhUjtFE_qh-4tkkrllf8NBdm9QzjOMqI1iMMzwg/formResponse";

  const ENTRY_IGN = "entry.28427024";
  const ENTRY_PLAYTIME = "entry.506936599";
  const ENTRY_TIER = "entry.366075710";
  const ENTRY_REASON = "entry.600611479";
  const ENTRY_DISCORD = "entry.467929086";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = new FormData();
    data.append(ENTRY_IGN, formData.ign);
    data.append(ENTRY_PLAYTIME, formData.playtime);
    data.append(ENTRY_TIER, formData.tier);
    data.append(ENTRY_REASON, formData.reason);
    data.append(ENTRY_DISCORD, formData.discord);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });

      toast({
        title: "🔥 Application Submitted",
        description: "Your application has been received by VULKANS Command.",
        duration: 5000,
      });

      setFormData({
        ign: "",
        playtime: "",
        tier: "",
        reason: "",
        discord: "",
      });
    } catch (error) {
      toast({
        title: "⚠️ Transmission Failed",
        description: "Something went wrong. Try again later.",
        duration: 5000,
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="join" className="relative min-h-screen py-32 px-6 bg-black/50">
      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-black font-[Orbitron] text-glow-secondary mb-6">
            <span className="bg-gradient-gaming bg-clip-text text-transparent">
              JOIN THE FORGE
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Think you have what it takes? Apply for VULKANS and prove your worth in the IndianMC scene.
          </p>

          <div className="glass-card px-6 py-4 rounded-xl border-l-4 border-primary inline-block">
            <p className="text-sm text-muted-foreground">
              ⚠️ Only elite players are accepted — mediocrity isn't tolerated.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="glass-card p-12 rounded-2xl holographic-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-holographic opacity-5" />

          <form onSubmit={handleSubmit} className="relative space-y-8">

            {/* IGN */}
            <div className="space-y-3">
              <label className="text-sm font-bold font-[Orbitron] uppercase tracking-wider flex items-center gap-2">
                <span className="text-primary">▸</span> Minecraft IGN
              </label>
              <Input
                required
                placeholder="Your Minecraft Username"
                value={formData.ign}
                onChange={(e) => setFormData({ ...formData, ign: e.target.value })}
                className="bg-background/50 border-border/50 focus:border-primary h-12 font-[Orbitron]"
              />
            </div>

            {/* Playtime */}
            <div className="space-y-3">
              <label className="text-sm font-bold font-[Orbitron] uppercase tracking-wider flex items-center gap-2">
                <span className="text-primary">▸</span> Playtime (Hours)
              </label>
              <Input
                required
                placeholder="Total playtime"
                value={formData.playtime}
                onChange={(e) => setFormData({ ...formData, playtime: e.target.value })}
                className="bg-background/50 border-border/50 focus:border-primary h-12 font-[Orbitron]"
              />
            </div>

            {/* Tier */}
            <div className="space-y-3">
              <label className="text-sm font-bold font-[Orbitron] uppercase tracking-wider flex items-center gap-2">
                <span className="text-secondary">▸</span> Tier Applying For
              </label>
              <Input
                required
                placeholder="HT3 / LT3 / Rookie"
                value={formData.tier}
                onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                className="bg-background/50 border-border/50 focus:border-secondary h-12 font-[Orbitron]"
              />
            </div>

            {/* Reason */}
            <div className="space-y-3">
              <label className="text-sm font-bold font-[Orbitron] uppercase tracking-wider flex items-center gap-2">
                <span className="text-secondary">▸</span> Why VULKANS?
              </label>
              <Textarea
                required
                placeholder="Tell us why you fit in the IndianMC powerhouse."
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                className="bg-background/50 border-border/50 focus:border-secondary min-h-[120px] font-[Orbitron]"
              />
            </div>

            {/* Discord */}
            <div className="space-y-3">
              <label className="text-sm font-bold font-[Orbitron] uppercase tracking-wider flex items-center gap-2">
                <span className="text-primary">▸</span> Discord ID
              </label>
              <Input
                required
                placeholder="yourname#0000"
                value={formData.discord}
                onChange={(e) => setFormData({ ...formData, discord: e.target.value })}
                className="bg-background/50 border-border/50 focus:border-primary h-12 font-[Orbitron]"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold font-[Orbitron] bg-gradient-gaming hover:scale-[1.02] transition-all relative overflow-hidden group"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">TRANSMITTING...</span>
                ) : (
                  <>
                    <span className="relative z-10">SUBMIT APPLICATION</span>
                    <div className="absolute inset-0 bg-gradient-holographic opacity-0 group-hover:opacity-100 transition-opacity" />
                  </>
                )}
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              🔒 All transmissions are encrypted and sent to VULKANS Council
            </p>
          </form>

          <div className="scanline absolute inset-0 pointer-events-none rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
