import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGithub, FiArrowDown } from "react-icons/fi";
import FadeIn from "./FadeIn";

const techBadges = [
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "n8n",
  "Claude API",
  "Playwright",
  "PostgreSQL",
  "Docker",
  "Node.js",
  "TypeScript",
  "LangChain",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-secondary/8 rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-16 items-center">
          {/* Left */}
          <div>
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-sm text-dim font-mono">
                  Available for freelance
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
                <span className="text-text">Full-Stack Developer</span>
                <br />
                <span className="text-text">& </span>
                <span className="bg-gradient-to-r from-accent via-accent-glow to-accent-secondary bg-clip-text text-transparent">
                  AI Automation
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-secondary to-accent bg-clip-text text-transparent">
                  Engineer
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.35}>
              <p className="mt-6 text-base sm:text-lg text-muted max-w-lg leading-relaxed">
                I build production web apps and automate the workflows that slow
                businesses down.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <p className="mt-3 text-sm text-dim max-w-lg leading-relaxed">
                3 years shipping React frontends, Python backends, browser
                automation systems, and AI-powered pipelines. Based in the
                Philippines.
              </p>
            </FadeIn>

            <FadeIn delay={0.55}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group px-5 py-2.5 bg-accent hover:bg-accent-glow text-white text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_24px_rgba(124,106,239,0.3)]"
                >
                  View My Work
                  <span className="inline-block ml-1 transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </a>
                <a
                  href="https://drive.google.com/file/d/1ca6c9p7PnAG46jZKEopgF16A7ZVym6Ly/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 border border-border hover:border-accent/50 text-text text-sm font-semibold rounded-lg transition-all hover:bg-accent/5"
                >
                  Download Resume
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.65}>
              <div className="mt-8 flex flex-wrap gap-5 text-xs text-dim">
                <a
                  href="mailto:Lorenzgalasao@gmail.com"
                  className="flex items-center gap-1.5 hover:text-muted transition-colors"
                >
                  <FiMail size={12} />
                  Lorenzgalasao@gmail.com
                </a>
                <a
                  href="tel:+639493982865"
                  className="flex items-center gap-1.5 hover:text-muted transition-colors"
                >
                  <FiPhone size={12} />
                  (+63) 949 398 2865
                </a>
                <a
                  href="https://github.com/RamblesShambles"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-muted transition-colors"
                >
                  <FiGithub size={12} />
                  RamblesShambles
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — tech badges */}
          <div className="hidden lg:flex flex-wrap justify-end gap-2 max-w-[260px]">
            {techBadges.map((badge, i) => (
              <FadeIn key={badge} delay={0.4 + i * 0.04} direction="none">
                <motion.span
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 12px rgba(124,106,239,0.25)",
                  }}
                  className="block px-3 py-1.5 bg-surface/80 border border-border rounded-md text-xs font-mono text-muted cursor-default backdrop-blur-sm"
                >
                  {badge}
                </motion.span>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <FadeIn delay={1.2} direction="none">
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiArrowDown className="text-dim" size={18} />
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
