import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiFileText,
  FiSend,
} from "react-icons/fi";
import { SectionLabel } from "./About";
import FadeIn, { StaggerIn, StaggerItem } from "./FadeIn";

const contactLinks = [
  {
    icon: FiMail,
    label: "Email",
    value: "Lorenzgalasao@gmail.com",
    href: "mailto:Lorenzgalasao@gmail.com",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: "(+63) 949 398 2865",
    href: "tel:+639493982865",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Quezon City, Philippines",
    href: null,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "RamblesShambles",
    href: "https://github.com/RamblesShambles",
  },
  {
    icon: FiFileText,
    label: "Resume",
    value: "View / Download",
    href: "https://drive.google.com/file/d/1ca6c9p7PnAG46jZKEopgF16A7ZVym6Ly/view?usp=sharing",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:Lorenzgalasao@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <SectionLabel>06 — Contact</SectionLabel>
          <h2 className="text-3xl font-bold text-text mb-4">Get In Touch</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-muted max-w-xl mb-10 text-sm leading-relaxed">
            Available for freelance work, ongoing contracts, and automation
            projects. Response time is usually within a few hours.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <FadeIn delay={0.15}>
            <StaggerIn className="space-y-1" stagger={0.06}>
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const content = (
                  <StaggerItem key={item.label}>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-surface/50 transition-colors group">
                      <Icon
                        size={15}
                        className="text-dim group-hover:text-accent transition-colors"
                      />
                      <div>
                        <div className="text-[10px] text-dim uppercase tracking-wider">
                          {item.label}
                        </div>
                        <div className="text-sm text-muted group-hover:text-text transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  );
                }
                return <div key={item.label}>{content}</div>;
              })}
            </StaggerIn>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.25}>
            <form
              onSubmit={handleSubmit}
              className="bg-surface/40 border border-border rounded-2xl p-6 space-y-3"
            >
              <input
                type="text"
                placeholder="Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-bg/60 border border-border rounded-lg text-text placeholder-dim text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-bg/60 border border-border rounded-lg text-text placeholder-dim text-sm focus:outline-none focus:border-accent/50 transition-colors"
              />
              <textarea
                placeholder="Message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-2.5 bg-bg/60 border border-border rounded-lg text-text placeholder-dim text-sm focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full py-2.5 bg-accent hover:bg-accent-glow text-white text-sm font-semibold rounded-lg transition-all hover:shadow-[0_0_20px_rgba(124,106,239,0.3)] flex items-center justify-center gap-2"
              >
                <FiSend size={13} />
                Send Message
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
