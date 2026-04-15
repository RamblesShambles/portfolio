import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/projects";
import { SectionLabel } from "./About";
import FadeIn, { StaggerIn, StaggerItem } from "./FadeIn";

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>03 — Projects</SectionLabel>
          <h2 className="text-3xl font-bold text-text mb-10">
            Shipped Projects
          </h2>
        </FadeIn>

        <StaggerIn className="grid md:grid-cols-2 gap-4" stagger={0.1}>
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <TiltCard className="group bg-surface/40 border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-colors duration-300 cursor-default h-full flex flex-col">
                {/* Screenshot */}
                <div className="h-48 bg-bg/60 border-b border-border relative overflow-hidden shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent" />
                  <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h3 className="text-base font-bold text-text leading-tight">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dim hover:text-accent transition-colors"
                        >
                          <FiExternalLink size={14} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-dim hover:text-accent transition-colors"
                        >
                          <FiGithub size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-accent-secondary mb-2 leading-snug">
                    {project.tagline}
                  </p>

                  <p className="text-[13px] text-dim leading-relaxed line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  {project.note && (
                    <p className="text-[11px] text-muted mt-2 italic">
                      {project.note}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 bg-bg/60 border border-border/70 rounded text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerIn>
      </div>
    </section>
  );
}
