import type { Metadata } from "next";
import About from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description: "Built by infrastructure engineers who got tired of watching automations fail. Learn about the team behind AutomateForge.",
};

export default function AboutPage() {
  return (
    <div className="pt-16">
      <About />
    </div>
  );
}
