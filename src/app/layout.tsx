import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AutomateForge — Productized DevOps Packages",
    template: "%s | AutomateForge",
  },
  description:
    "Fixed-scope DevOps packages that ship in days. CI/CD pipelines, SRE foundations, cloud cost optimization, and security hardening. No consulting fog.",
  keywords: [
    "DevOps",
    "SRE",
    "CI/CD",
    "cloud cost optimization",
    "FinOps",
    "Kubernetes",
    "platform engineering",
    "productized services",
    "infrastructure automation",
  ],
  authors: [{ name: "AutomateForge" }],
  openGraph: {
    title: "AutomateForge — Productized DevOps Packages",
    description:
      "Fixed-scope DevOps packages that ship in days. CI/CD pipelines, SRE foundations, cloud cost optimization, and security hardening.",
    url: "https://automateforge.io",
    siteName: "AutomateForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomateForge — Productized DevOps Packages",
    description:
      "Fixed-scope DevOps packages that ship in days. No consulting fog.",
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
      <body className="font-sans antialiased min-h-screen mesh-bg">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
