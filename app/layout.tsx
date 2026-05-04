import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Standup Summarizer — Turn Slack chaos into executive summaries",
  description: "Monitors team Slack channels and generates daily/weekly executive summaries of progress, blockers, and decisions. Built for engineering managers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="03e16584-0897-44c9-9050-a41a34efdfdc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
