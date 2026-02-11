import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AutomateForge — Platform Engineering, Productized",
    template: "%s | AutomateForge",
  },
  description:
    "We build internal developer platforms, automate EU compliance (NIS2, DORA, EU AI Act), and accelerate engineering delivery. Fixed scope. No consulting fog.",
  keywords: [
    "platform engineering",
    "internal developer platform",
    "NIS2 compliance",
    "DORA compliance",
    "EU AI Act",
    "DevOps",
    "SRE",
    "golden paths",
    "Backstage",
    "Crossplane",
    "Kubernetes",
    "GitOps",
    "productized services",
  ],
  authors: [{ name: "AutomateForge" }],
  openGraph: {
    title: "AutomateForge — Platform Engineering, Productized",
    description:
      "Internal developer platforms, EU compliance automation, and engineering delivery — fixed scope, no consulting fog.",
    url: "https://automateforge.io",
    siteName: "AutomateForge",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutomateForge — Platform Engineering, Productized",
    description:
      "Internal developer platforms, EU compliance automation, and engineering delivery. Fixed scope.",
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
