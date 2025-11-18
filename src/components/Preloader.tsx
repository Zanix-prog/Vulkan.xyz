import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("Initializing Vulkans Core");

  useEffect(() => {
    const statuses = [
      "Initializing Vulkans Core",
      "Calibrating Reality",
      "Loading Guild Systems",
      "Establishing Connection",
    ];
    
    let currentStatus = 0;
    const statusInterval = setInterval(() => {
      currentStatus = (currentStatus + 1) % statuses.length;
      setStatus(statuses[currentStatus]);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(statusInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(progressInterval);
      clearInterval(statusInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background particle-bg">
      <div className="text-center space-y-8">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-gradient-gaming opacity-50 animate-pulse-glow" />
          <h1 className="relative text-8xl font-black font-[Orbitron] text-glow-strong bg-gradient-gaming bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.8)]">
            VULKANS
          </h1>
        </div>

        {/* Particle ring animation */}
        <div className="relative w-32 h-32 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full" />
          <div className="absolute inset-0 border-4 border-t-primary border-r-secondary rounded-full animate-spin" style={{ animationDuration: "2s" }} />
          <div className="absolute inset-4 border-4 border-secondary/20 rounded-full" />
          <div className="absolute inset-4 border-4 border-b-secondary border-l-primary rounded-full animate-spin" style={{ animationDuration: "3s", animationDirection: "reverse" }} />
        </div>

        {/* Status text */}
        <div className="space-y-3">
          <p className="text-xl font-medium text-foreground/80 font-[Orbitron]">
            {status}
          </p>
          
          {/* Progress bar */}
          <div className="w-80 h-2 bg-muted rounded-full overflow-hidden mx-auto">
            <div 
              className="h-full bg-gradient-gaming transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          <p className="text-sm text-muted-foreground font-mono">
            {progress}%
          </p>
        </div>

        {/* Neon streams */}
        <div className="flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-16 bg-gradient-to-t from-primary to-transparent animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background scanline effect */}
      <div className="scanline absolute inset-0 pointer-events-none" />
    </div>
  );
};

export default Preloader;
