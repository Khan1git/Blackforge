import { ImageResponse } from "next/og";

export const alt = "BlackForge — Innovate. Build. Secure.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f5f6f8",
          color: "#0b1220",
          padding: "60px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
          }}
        >
          <span>BlackForge</span>
          <span>Independent IT and digital agency</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 0.98,
              letterSpacing: "-0.05em",
            }}
          >
            <span>Innovate.</span>
            <span style={{ color: "#1e40af" }}>Build. Secure.</span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.4,
              color: "#5a6475",
              maxWidth: 820,
            }}
          >
            We design, build, secure, and automate digital systems that last.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #d1d5de",
            paddingTop: 22,
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#5a6475",
          }}
        >
          <span>blackforge.agency</span>
          <span>Working worldwide</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
