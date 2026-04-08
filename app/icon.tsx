import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#081735" }}>
        <div style={{ fontSize: 34, fontWeight: 800, fontFamily: "sans-serif", color: "#1cc4af" }}>DGE</div>
      </div>
    ),
    size
  );
}
