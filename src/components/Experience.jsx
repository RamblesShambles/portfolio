import { SectionLabel } from "./About";
import FadeIn, { StaggerIn, StaggerItem } from "./FadeIn";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>04 — Experience</SectionLabel>
          <h2 className="text-3xl font-bold text-text mb-10">
            Work Experience
          </h2>
        </FadeIn>

        <div className="relative ml-4 md:ml-8">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

          <StaggerIn className="space-y-6" stagger={0.12}>
            {experience.map((role) => (
              <StaggerItem key={role.title + role.period}>
                <div className="relative pl-8 md:pl-12">
                  {/* Dot */}
                  <div className="absolute left-0 top-3 -translate-x-[3.5px]">
                    <div className="w-2 h-2 rounded-full bg-accent ring-4 ring-bg" />
                  </div>

                  <div className="bg-surface/40 border border-border rounded-2xl p-5 sm:p-6 hover:border-accent/20 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="text-base font-bold text-text">
                        {role.title}
                      </h3>
                      <span className="text-[11px] text-dim font-mono whitespace-nowrap">
                        {role.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-sm text-muted leading-relaxed flex gap-2"
                        >
                          <span className="text-accent mt-0.5 shrink-0">
                            ›
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerIn>
        </div>
      </div>
    </section>
  );
}
