"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="ta">
      <body>
        <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
          <h2>ஏதோ தவறு நடந்துவிட்டது (Something went wrong)</h2>
          <button
            onClick={() => reset()}
            style={{ marginTop: "1rem", padding: "0.5rem 1rem", backgroundColor: "#15803D", color: "white", borderRadius: "0.5rem", border: "none", cursor: "pointer" }}
          >
            மீண்டும் முயற்சிக்கவும் (Try again)
          </button>
        </div>
      </body>
    </html>
  );
}
