import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "radial-gradient(circle at top left, rgba(28,196,175,0.28), transparent 30%), linear-gradient(180deg, #081735 0%, #061126 100%)",
          color: "white"
        }}
      >
        <div style={{ fontSize: 34, fontWeight: 800, color: "#1cc4af" }}>Data Growth Engine</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, maxWidth: "860px" }}>Recover Revenue Lost to Bad Data</div>
          <div style={{ fontSize: 28, lineHeight: 1.4, color: "rgba(255,255,255,0.8)", maxWidth: "900px" }}>
            DGE helps B2B SaaS companies recover wasted ad spend and hidden pipeline by fixing bad data.
          </div>
        </div>
      </div>
    ),
    size
  );
}
