import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt =
  "Satrn — centralizza richieste, follow-up e processi operativi";

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
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(155deg, #f8fafc 0%, #ffffff 42%, #eff6ff 100%)",
          padding: 72,
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        <div
          style={{
            width: 48,
            height: 4,
            borderRadius: 2,
            background: "#2563eb",
            marginBottom: 28,
          }}
        />
        <div
          style={{
            fontSize: 58,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.03em",
            lineHeight: 1,
          }}
        >
          Satrn
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            fontWeight: 600,
            color: "#1e293b",
            maxWidth: 920,
            lineHeight: 1.28,
            letterSpacing: "-0.02em",
          }}
        >
          Centralizza richieste, follow-up e processi operativi
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            fontWeight: 400,
            color: "#64748b",
            maxWidth: 820,
            lineHeight: 1.45,
          }}
        >
          Un sistema ordinato per agenzie, studi e società di servizi.
        </div>
        <div
          style={{
            marginTop: "auto",
            paddingTop: 40,
            fontSize: 18,
            color: "#94a3b8",
            fontWeight: 500,
          }}
        >
          www.satrn.tech
        </div>
      </div>
    ),
    { ...size },
  );
}
