import { SectionLabel } from "./About";
import FadeIn, { StaggerIn, StaggerItem } from "./FadeIn";
import { automations } from "../data/automations";

export default function Automations() {
  return (
    <section id="automations" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>05 — Automations</SectionLabel>
          <h2 className="text-3xl font-bold text-text mb-4">
            Automation Work
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-muted max-w-2xl mb-10 text-sm leading-relaxed">
            Beyond full-stack development, a large part of my work is building
            automation systems that replace slow, manual processes with reliable
            pipelines that run 24/7.
          </p>
        </FadeIn>

        <StaggerIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.07}>
          {automations.map((auto) => (
            <StaggerItem key={auto.title}>
              <div className="group bg-surface/40 border border-border rounded-2xl p-5 hover:border-accent/30 hover:bg-surface/60 transition-all duration-300">
                <div className="text-xl mb-3">{auto.icon}</div>
                <h3 className="text-sm font-bold text-text mb-2">
                  {auto.title}
                </h3>
                <p className="text-xs text-dim leading-relaxed mb-3">
                  {auto.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {auto.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-mono px-2 py-0.5 bg-bg/60 border border-border/70 rounded text-muted group-hover:text-text transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
