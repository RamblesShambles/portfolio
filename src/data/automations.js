export const automations = [
  {
    icon: "🤖",
    title: "Insurance Quote Automation",
    description:
      "Navigates Progressive, Travelers, and Hartford portals autonomously using Playwright and Browserless. Handles captchas, maintains sessions, fills quote forms, and compiles comparison results.",
    tools: ["Playwright", "Browserless", "Claude Code", "Python"],
  },
  {
    icon: "📍",
    title: "Google Places AI Scraper",
    description:
      "Takes location and category inputs from a Google Sheet, scrapes businesses, crawls their websites via Firecrawl, and scores each one 1-10 across luxury, menu, ambiance, and food quality with written summaries.",
    tools: ["n8n", "Apify", "Firecrawl", "Google Sheets", "AI Scoring"],
  },
  {
    icon: "📄",
    title: "Invoice to PDF Email Router",
    description:
      "Monitors incoming invoices, converts them to formatted PDFs, and routes each one to the correct team automatically.",
    tools: ["n8n", "PDF generation", "Email routing"],
  },
  {
    icon: "🔄",
    title: "Zoho CRM Lead Sync",
    description:
      "Captures leads from web forms, creates and updates Zoho CRM records, and triggers automated follow-up sequences without any manual input.",
    tools: ["n8n", "Zoho CRM", "Webhooks"],
  },
  {
    icon: "⚙️",
    title: "GoHighLevel Client Systems",
    description:
      "Managed a GHL company account end-to-end. Built sub-accounts, pipelines, workflows, forms, and lead generation systems for multiple client setups.",
    tools: ["GoHighLevel", "Pipelines", "Workflows", "Forms"],
  },
  {
    icon: "🕷️",
    title: "Reddit & Job Board Scrapers",
    description:
      "Custom scrapers for Reddit posts/comments and job listings from Indeed and OnlineJobs.ph. Data piped into structured databases for analysis.",
    tools: ["n8n", "HTML Scraping", "Python", "PostgreSQL"],
  },
];
