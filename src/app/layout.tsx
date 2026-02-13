import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AutomateForge — Production-Grade Automation Engineering",
    template: "%s | AutomateForge",
  },
  description:
    "We engineer business automations with monitoring, error handling, and documentation. DevOps-grade reliability for your workflows. Free architecture review. Results in weeks.",
  keywords: [
    "automation engineering",
    "production automation",
    "business process automation",
    "workflow automation",
    "Make automation",
    "n8n automation",
    "AI agents",
    "automation monitoring",
    "integration architecture",
  ],
  authors: [{ name: "AutomateForge" }],
  openGraph: {
    title: "AutomateForge — Production-Grade Automation Engineering",
    description:
      "We engineer business automations with monitoring, error handling, and documentation. DevOps-grade reliability for your workflows.",
    url: "https://automateforge.io",
    siteName: "AutomateForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomateForge — Production-Grade Automation Engineering",
    description:
      "Your automations break because they were never engineered. We fix that.",
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://automateforge.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
