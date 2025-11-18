import { useState } from "react";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
  {
    name: "Project Inferno",
    tagline: "Built to rule IndianMC",
    description:
      "Our flagship initiative dedicated to mastering and dominating the IndianMC scene — especially crystal PvP. Focused strategies, constant analysis, and ruthless execution to keep VULKANS at the top of Indian Minecraft.",
    status: "ACTIVE",
    color: "primary",
  },
];

  return (
    <section id="projects" className="relative py-32 px-6 particle-bg">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black font-[Orbitron] text-glow-primary mb-6">
            <span className="bg-gradient-gaming bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]">
              ACTIVE OPERATIONS
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategic initiatives that define our path to absolute dominance. Each project a testament to our commitment to excellence.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl hover-lift cursor-pointer group relative overflow-hidden transform-3d"
              onClick={() => setSelectedProject(index)}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Animated background */}
              <div className={`absolute inset-0 bg-gradient-${project.color === 'primary' ? 'volcanic' : 'cyber'} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <div className={`px-3 py-1 rounded-full border text-xs font-[Orbitron] font-bold ${
                  project.status === 'ACTIVE' ? 'bg-primary/10 border-primary/30 text-primary' :
                  'bg-muted/10 border-muted-foreground/30 text-muted-foreground'
                }`}>
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4 mt-8">
                <div>
                  <h3 className="text-2xl font-black font-[Orbitron] text-foreground group-hover:text-primary transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground italic">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="pt-4 flex items-center gap-2 text-sm font-[Orbitron] text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>VIEW DETAILS</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-primary/30 rounded-bl-2xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-secondary/30 rounded-tr-2xl" />
            </div>
          ))}
        </div>

        {/* Project detail modal */}
        {selectedProject !== null && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="glass-card p-12 rounded-2xl max-w-3xl w-full holographic-border relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      projects[selectedProject].status === 'ACTIVE' ? 'bg-primary animate-pulse' :
                      projects[selectedProject].status === 'ONGOING' ? 'bg-secondary animate-pulse' :
                      'bg-muted'
                    }`} />
                    <span className="text-sm font-[Orbitron] text-muted-foreground">
                      {projects[selectedProject].status}
                    </span>
                  </div>
                  
                  <h3 className="text-5xl font-black font-[Orbitron] text-glow-primary">
                    {projects[selectedProject].name}
                  </h3>
                  
                  <p className="text-xl text-muted-foreground italic">
                    {projects[selectedProject].tagline}
                  </p>
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <h4 className="text-xl font-bold font-[Orbitron] text-secondary">
                    MISSION OVERVIEW
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {projects[selectedProject].description}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="glass-card p-4 rounded-xl text-center">
                    <div className="text-3xl font-black text-primary mb-1">98%</div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <div className="text-3xl font-black text-secondary mb-1">24/7</div>
                    <div className="text-xs text-muted-foreground">Operations</div>
                  </div>
                  <div className="glass-card p-4 rounded-xl text-center">
                    <div className="text-3xl font-black text-primary mb-1">Elite</div>
                    <div className="text-xs text-muted-foreground">Classification</div>
                  </div>
                </div>
              </div>

              {/* Scanline */}
              <div className="scanline absolute inset-0 pointer-events-none rounded-2xl" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
