import { ImageResponse } from "next/og";
import { DSLogo } from "@/components/common/DSLogo";

export const runtime = "edge";
export const alt = "Dakota Swank | Software Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ffffff 0%, #e2e8f0 52%, #cbd5e1 100%)",
          color: "#111827",
          fontFamily: "Arial, sans-serif",
          padding: 72,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "2px solid #4f46e5",
            borderRadius: 28,
            padding: 56,
            background: "rgba(255, 255, 255, 0.72)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 34,
              color: "#4f46e5",
              fontWeight: 700,
            }}
          >
            <span>Dakota Swank</span>
            <div
              style={{
                width: 96,
                height: 96,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #4f46e5",
                borderRadius: 999,
                color: "#4f46e5",
              }}
            >
              <DSLogo size={72} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 86, fontWeight: 800, lineHeight: 1 }}>
              Software Engineer
            </div>
            <div style={{ fontSize: 34, lineHeight: 1.35, color: "#374151" }}>
              Modern web applications, QA engineering, and thoughtful user
              experiences.
            </div>
          </div>
          <div style={{ fontSize: 28, color: "#4f46e5", fontWeight: 700 }}>
            swanksoftware.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
