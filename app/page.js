"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">Welcome 👋</h1>
        <p className="muted">
          A lightweight app to share with your partner—resources, a PCS checklist,
          and notes that save in your browser.
        </p>
        <div style={{marginTop:16, display:'flex', gap:10, flexWrap:'wrap'}}>
          <Link className="btn" href="/resources">Explore Resources →</Link>
          <Link className="btn" href="/checklist">Open Checklist →</Link>
          <a
            className="btn"
            href="https://claude.ai/public/artifacts/1b540ecf-2e2e-4c77-8a9e-8f1750d0cd2d"
            target="_blank"
            rel="noreferrer"
          >
            Dear Mr. Smith →
          </a>
        </div>
      </div>

      <div style={{height:16}}/>
      <div className="grid">
        <div className="card">
          <h3>Personal Notes</h3>
          <p className="muted">
            Jot down quick notes. They’re stored locally in your browser.
          </p>
          <Notes/>
        </div>
        <div className="card">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="https://www.militaryonesource.mil/" target="_blank">Military OneSource</a></li>
            <li><a href="https://www.tricare.mil/" target="_blank">TRICARE</a></li>
            <li><a href="https://www.defense.gov/" target="_blank">U.S. DoD</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

function Notes() {
  const KEY = "milspouse:notes";
  const [text, setText] = useState("");
  useEffect(() => { const saved = localStorage.getItem(KEY); if(saved) setText(saved); }, []);
  useEffect(() => { const id = setTimeout(() => localStorage.setItem(KEY, text), 400); return () => clearTimeout(id); }, [text]);
  return (
    <div>
      <textarea className="textarea" value={text} onChange={e=>setText(e.target.value)} placeholder="Type your notes here..." />
      <div className="small muted" style={{marginTop:8}}>Autosaves locally.</div>
    </div>
  );
}
