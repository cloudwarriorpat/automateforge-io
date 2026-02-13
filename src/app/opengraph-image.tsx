import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AutomateForge — Production-Grade Automation Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 50%, #0A0A0F 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(108,92,231,0.15) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            display: "flex",
          }}
        />

        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(108,92,231,0.3) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "16px",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.1,
              display: "flex",
            }}
          >
            AutomateForge
          </div>
          <div
            style={{
              fontSize: "28px",
              fontWeight: 400,
              color: "#00D2FF",
              textAlign: "center",
              display: "flex",
            }}
          >
            Production-Grade Automation Engineering
          </div>
          <div
            style={{
              marginTop: "24px",
              padding: "12px 32px",
              background: "linear-gradient(135deg, #6C5CE7, #00D2FF)",
              borderRadius: "8px",
              fontSize: "20px",
              fontWeight: 600,
              color: "#ffffff",
              display: "flex",
            }}
          >
            automateforge.io
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
