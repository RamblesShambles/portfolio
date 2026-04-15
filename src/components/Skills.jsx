import { SectionLabel } from "./About";
import FadeIn, { StaggerIn, StaggerItem } from "./FadeIn";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>02 — Skills</SectionLabel>
          <h2 className="text-3xl font-bold text-text mb-10">Tech Stack</h2>
        </FadeIn>

        <StaggerIn className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" stagger={0.06}>
          {skillCategories.map((cat) => (
            <StaggerItem key={cat.title}>
              <div className="group bg-surface/40 border border-border rounded-2xl p-5 hover:border-accent/30 hover:bg-surface/60 transition-all duration-300">
                <h3 className="text-[10px] font-bold font-mono text-accent tracking-[0.15em] mb-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] px-2 py-0.5 bg-bg/80 border border-border/70 rounded-md text-muted group-hover:text-text transition-colors"
                    >
                      {skill}
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
