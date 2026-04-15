import { FiGithub, FiMail, FiFileText } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-dim">
          Built by Lorenz Karl Ramal · 2025
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/RamblesShambles"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim hover:text-accent transition-colors"
          >
            <FiGithub size={15} />
          </a>
          <a
            href="mailto:Lorenzgalasao@gmail.com"
            className="text-dim hover:text-accent transition-colors"
          >
            <FiMail size={15} />
          </a>
          <a
            href="https://drive.google.com/file/d/1ca6c9p7PnAG46jZKEopgF16A7ZVym6Ly/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dim hover:text-accent transition-colors"
          >
            <FiFileText size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
