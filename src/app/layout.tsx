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
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "AutomateForge",
              url: "https://automateforge.io",
              description:
                "Production-grade automation engineering. We build business automations with monitoring, error handling, and documentation.",
              priceRange: "$$$",
              areaServed: "Worldwide",
              serviceType: [
                "Business Automation",
                "Integration Engineering",
                "Workflow Automation",
                "AI Agent Development",
              ],
              sameAs: ["https://github.com/cloudwarriorpat"],
            }),
          }}
        />

        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />

        {/* Microsoft Clarity */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "XXXXXXXXXXXX");
            `,
          }}
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
