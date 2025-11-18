const Footer = () => {
  const socialLinks = [
    { name: "Discord", icon: "💬", href: "https://discord.gg/5jNUc9fU8E" },
  ];

  return (
    <footer className="relative py-20 px-6 bg-black border-t border-primary/20">
      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Logo and tagline */}
          <div className="space-y-6">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-gaming blur-2xl opacity-50" />
              <h3 className="relative text-4xl font-black font-[Orbitron] text-glow-primary drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                VULKANS
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Born in Fire, Built to Lead.
              <br />
              The elite guild redefining competitive excellence.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-primary font-[Orbitron] font-bold">ACTIVE</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-[Orbitron] text-secondary mb-6">
              Navigation
            </h4>
            <nav className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Roster", href: "#roster" },
                { label: "Projects", href: "#projects" },
                { label: "Join Us", href: "#join" },
              ].map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors font-[Orbitron]"
                >
                  ▸ {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold font-[Orbitron] text-secondary mb-6">
              Connect
            </h4>
            <div className="space-y-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl">{social.icon}</span>
                  </div>
                  <span className="font-[Orbitron] text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-12" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Guild emblem */}
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 bg-gradient-gaming rounded-full blur-lg opacity-50 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full border-2 holographic-border flex items-center justify-center bg-card/50 backdrop-blur">
                <span className="text-2xl font-black font-[Orbitron] text-primary">V</span>
              </div>
            </div>
            <div>
              <p className="text-sm font-[Orbitron] text-foreground font-bold">
                VULKANS GUILD
              </p>
              <p className="text-xs text-muted-foreground">
                Est. 2020
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} VULKANS. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground font-[Orbitron]">
              FORGED IN FIRE. BUILT TO DOMINATE.
            </p>
          </div>
        </div>

        {/* Animated accent line */}
        <div className="mt-12 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-50 rounded-full" />
      </div>
    </footer>
  );
};

export default Footer;
