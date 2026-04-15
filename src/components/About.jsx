import FadeIn, { StaggerIn, StaggerItem } from "./FadeIn";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "100+", label: "Automations Built" },
  { value: "4", label: "Shipped Products" },
  { value: "80%+", label: "Manual Work Eliminated" },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>01 — About</SectionLabel>
          <h2 className="text-3xl font-bold text-text mb-10">About Me</h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          <FadeIn delay={0.15}>
            <div className="bg-surface/50 border border-border rounded-2xl p-6 sm:p-8 h-full">
              <div className="space-y-4 text-muted text-sm sm:text-base leading-relaxed">
                <p>
                  I'm a Full-Stack Developer and AI Automation Engineer based in
                  Quezon City, Philippines. My work sits at the intersection of
                  software development and intelligent automation — I build things
                  that work, then automate the parts that don't need humans
                  anymore.
                </p>
                <p>
                  Over the past 3 years I've worked across the full stack: React
                  and Next.js frontends, FastAPI and Node.js backends, PostgreSQL
                  and MongoDB databases, and production deployments on Nginx and
                  Hetzner. On the automation side, I've built hundreds of n8n
                  workflows, managed GoHighLevel company accounts, and created
                  browser automation systems that replaced entire manual teams.
                </p>
                <p>
                  I'm currently pursuing a BS in Computer Science at AMA
                  University Online Education, and I'm always building something
                  new.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25} className="flex">
            <StaggerIn className="grid grid-cols-2 grid-rows-2 gap-3 flex-1" stagger={0.1}>
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="bg-surface/50 border border-border rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:border-accent/30 transition-all group h-full">
                    <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-br from-accent to-accent-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                      {stat.value}
                    </span>
                    <span className="text-[11px] text-dim mt-1.5 leading-tight">
                      {stat.label}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }) {
  return (
    <span className="text-[10px] font-mono text-accent tracking-[0.2em] uppercase mb-2 block">
      {children}
    </span>
  );
}

export function SectionHeader({ children }) {
  return (
    <FadeIn>
      <div className="mb-10">
        <SectionLabel>Section</SectionLabel>
        <h2 className="text-3xl font-bold text-text">{children}</h2>
        <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-accent-secondary rounded-full mt-3" />
      </div>
    </FadeIn>
  );
}
