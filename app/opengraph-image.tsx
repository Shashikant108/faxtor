import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/site-config";

// the picture shown when the site is shared on WhatsApp, LinkedIn, X and the like (1200 x 630); the edge runtime renders it, which also works where the Node one fails on paths with spaces
export const alt = `${SITE_NAME}: custom software, ERP and CRM for growing businesses`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "edge";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          color: "#fff",
          background:
            "radial-gradient(60% 80% at 95% 0%, rgba(124,92,255,0.55), transparent 70%), radial-gradient(50% 70% at 0% 100%, rgba(50,110,255,0.45), transparent 70%), linear-gradient(180deg, #0a1440 0%, #151c63 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 52, fontWeight: 600 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ width: 34, height: 14, borderRadius: 4, background: "#f7a21b", transform: "skewY(-18deg)" }} />
            <div style={{ width: 34, height: 16, borderRadius: 4, background: "#ef4a8c", transform: "skewY(-18deg)" }} />
            <div style={{ width: 24, height: 14, borderRadius: 4, background: "#22b8f0", transform: "skewY(-18deg)", marginLeft: 6 }} />
          </div>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: 48, fontSize: 68, fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.5 }}>
          <span>Software your</span>
          <span style={{ color: "#5fb4ff" }}>business deserves.</span>
        </div>
        <div style={{ display: "flex", marginTop: 30, fontSize: 30, color: "#c9d4f7" }}>
          Custom software · ERP · CRM · Web &amp; mobile apps · Automation
        </div>
        <div style={{ display: "flex", marginTop: 44, fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#8fb8ff" }}>
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    size,
  );
}
