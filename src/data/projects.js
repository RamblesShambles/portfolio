import {
  FiCpu,
  FiBarChart2,
  FiUsers,
  FiCalendar,
} from "react-icons/fi";

export const projects = [
  {
    title: "AgentCIPHR",
    tagline: "AI SaaS that builds software from a plain English description",
    description:
      "Users describe a project in plain English and an autonomous 8-phase AI pipeline builds it end-to-end. Features a multi-LLM hybrid router, credit-based billing, Studio revision interface with natural language change requests, version control with rollback, and WebSocket real-time build progress.",
    stack: [
      "React",
      "Next.js 14",
      "FastAPI",
      "SQLite",
      "Claude Sonnet",
      "Stripe",
      "Hetzner",
      "Nginx",
      "PM2",
      "Cloudflare",
      "GitHub Actions",
      "Playwright",
    ],
    live: "https://agentciphr.com",
    github: null,
    note: "Co-developed with one other engineer",
    icon: FiCpu,
    image: "/projects/agentciphr.png",
  },
  {
    title: "InsightDash",
    tagline: "Full-stack analytics dashboard with drag-and-drop widgets",
    description:
      "Analytics dashboard built for teams that need live data visibility without a full BI tool. Supports drag-and-drop widget layout, real-time charts, and one-click PDF export.",
    stack: ["React 18", "TypeScript", "FastAPI", "PostgreSQL"],
    live: null,
    github: "https://github.com/RamblesShambles/insightdash",
    note: null,
    icon: FiBarChart2,
    image: "/projects/insightdash.png",
  },
  {
    title: "HireFlow",
    tagline: "ATS with Kanban pipeline, interview scheduling, and team scorecards",
    description:
      "End-to-end Applicant Tracking System designed for small teams. Includes a Kanban hiring pipeline, interview scheduling, team scorecards, and hiring analytics. Recruiter-grade workflow without the enterprise price tag.",
    stack: ["React", "Node.js", "PostgreSQL"],
    live: null,
    github: "https://github.com/RamblesShambles/hireflow",
    note: null,
    icon: FiUsers,
    image: "/projects/hireflow.png",
  },
  {
    title: "BookMyTime",
    tagline: "Appointment scheduling with Stripe payments and automated notifications",
    description:
      "Appointment scheduling platform with calendar UI, staff and availability management, Stripe payment integration, and automated booking notifications.",
    stack: ["React", "Node.js", "Stripe", "PostgreSQL"],
    live: null,
    github: "https://github.com/RamblesShambles/bookmytime",
    note: null,
    icon: FiCalendar,
    image: "/projects/bookmytime.png",
  },
];
