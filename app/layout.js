import "./styles/globals.css";
import Link from "next/link";

export const metadata = {
  title: "Military Spouse Support",
  description: "Resources, notes, and a PCS checklist you can share.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="nav">
          <div style={{display:'flex', alignItems:'center', gap:10}}>
            <Link href="/" className="badge">MilSpouse Support</Link>
            <span className="small muted">beta</span>
          </div>
          <div className="links">
            <Link className="btn" href="/">Home</Link>
            <Link className="btn" href="/resources">Resources</Link>
            <Link className="btn" href="/checklist">Checklist</Link>
            <Link className="btn" href="/about">About</Link>
          </div>
        </nav>
        {children}
        <div className="container small muted">
          © {new Date().getFullYear()} MilSpouse Support
        </div>
      </body>
    </html>
  );
}
