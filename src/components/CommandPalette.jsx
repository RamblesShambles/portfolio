import { useState, useEffect, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiUser,
  FiCode,
  FiBriefcase,
  FiLayers,
  FiCpu,
  FiMail,
  FiGithub,
  FiFileText,
  FiArrowUpRight,
} from "react-icons/fi";

const commands = [
  { id: "about", label: "Go to About", icon: FiUser, href: "#about" },
  { id: "skills", label: "Go to Tech Stack", icon: FiCode, href: "#skills" },
  { id: "projects", label: "Go to Projects", icon: FiLayers, href: "#projects" },
  { id: "experience", label: "Go to Experience", icon: FiBriefcase, href: "#experience" },
  { id: "automations", label: "Go to Automations", icon: FiCpu, href: "#automations" },
  { id: "contact", label: "Go to Contact", icon: FiMail, href: "#contact" },
  {
    id: "github",
    label: "Open GitHub",
    icon: FiGithub,
    href: "https://github.com/RamblesShambles",
    external: true,
  },
  {
    id: "resume",
    label: "Download Resume",
    icon: FiFileText,
    href: "https://drive.google.com/file/d/1ca6c9p7PnAG46jZKEopgF16A7ZVym6Ly/view?usp=sharing",
    external: true,
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback(
    (command) => {
      setOpen(false);
      if (command.external) {
        window.open(command.href, "_blank", "noopener,noreferrer");
      } else {
        document.querySelector(command.href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    []
  );

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 z-[70] w-full max-w-lg"
          >
            <Command
              className="bg-surface border border-border rounded-xl overflow-hidden shadow-2xl shadow-black/40"
              loop
            >
              <div className="flex items-center border-b border-border px-4">
                <FiArrowUpRight className="text-dim mr-2 shrink-0" size={16} />
                <Command.Input
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent py-3.5 text-sm text-text placeholder-dim focus:outline-none"
                />
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] text-dim bg-bg border border-border rounded">
                  ESC
                </kbd>
              </div>
              <Command.List className="max-h-72 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-dim">
                  No results found.
                </Command.Empty>
                {commands.map((cmd) => {
                  const Icon = cmd.icon;
                  return (
                    <Command.Item
                      key={cmd.id}
                      onSelect={() => runCommand(cmd)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted cursor-pointer data-[selected=true]:bg-accent/10 data-[selected=true]:text-text transition-colors"
                    >
                      <Icon size={15} className="text-dim" />
                      <span className="flex-1">{cmd.label}</span>
                      {cmd.external && (
                        <FiArrowUpRight size={12} className="text-dim" />
                      )}
                    </Command.Item>
                  );
                })}
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
