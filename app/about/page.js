export const metadata = { title: "About • MilSpouse Support" };

export default function Page() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">About this app</h1>
        <p className="muted">
          A lightweight, no-backend app you can share easily.
          It stores data locally in your browser — no accounts or databases.
        </p>
        <ul>
          <li>Shareable checklist via encoded URL (no server).</li>
          <li>Personal notes on the home page (saved locally).</li>
        </ul>
        <p style={{marginTop:12}}>
          Design concept:{" "}
          <a
            href="https://claude.ai/public/artifacts/1b540ecf-2e2e-4c77-8a9e-8f1750d0cd2d"
            target="_blank"
            rel="noreferrer"
          >
            Claude Artifact →
          </a>
        </p>
      </div>
    </main>
  );
}
