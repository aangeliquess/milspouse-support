"use client";
import { useEffect, useState } from "react";

export const metadata = { title: "Checklist • MilSpouse Support" };

const DEFAULTS = [
  "Confirm orders and report dates",
  "Update DEERS information",
  "TRICARE PCM changes (if PCS)",
  "Arrange temporary lodging / TLA",
  "Notify landlord / schedule movers",
  "Forward mail & update addresses",
  "School / childcare transfer steps",
  "Vehicle registration & base decals",
];

export default function Page() {
  const KEY = "milspouse:checklist";
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(KEY);
    if (saved) setItems(JSON.parse(saved));
    else setItems(DEFAULTS.map((t, i) => ({ id: String(i+1), text: t, done: false })));
  }, []);

  useEffect(() => { localStorage.setItem(KEY, JSON.stringify(items)); }, [items]);

  const add = () => {
    if (!input.trim()) return;
    setItems([{ id: String(Date.now()), text: input.trim(), done: false }, ...items]);
    setInput("");
  };
  const toggle = (id) => setItems(items.map(it => it.id===id ? { ...it, done: !it.done } : it));
  const remove = (id) => setItems(items.filter(it => it.id!==id));
  const reset = () => { if (confirm("Reset to default tasks?")) setItems(DEFAULTS.map((t, i) => ({ id: String(i+1), text: t, done: false }))); };

  const share = async () => {
    const encoded = encodeURIComponent(btoa(JSON.stringify(items)));
    const url = `${location.origin}/checklist?data=${encoded}`;
    await navigator.clipboard.writeText(url);
    alert("Shareable link copied to clipboard!");
  };

  useEffect(() => {
    const p = new URLSearchParams(location.search).get("data");
    if (p) { try { setItems(JSON.parse(atob(decodeURIComponent(p)))); } catch {} }
  }, []);

  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">PCS / Life Checklist</h1>
        <p className="muted">Track tasks together. Your list saves in your browser. Use “Share list” to copy a link—no server needed.</p>
        <div style={{display:'flex', gap:8, marginTop:12}}>
          <input className="input" placeholder="Add a new task..." value={input} onChange={e=>setInput(e.target.value)} onKeyDown={e=>e.key==='Enter'&&add()}/>
          <button className="btn" onClick={add}>Add</button>
          <button className="btn" onClick={share}>Share list</button>
          <button className="btn" onClick={reset}>Reset</button>
        </div>
      </div>

      <div style={{height:16}}/>
      <div className="grid">
        <div className="card">
          <ul style={{listStyle:'none', padding:0, margin:0}}>
            {items.map(it => (
              <li key={it.id} style={{display:'flex', gap:8, alignItems:'center', padding:'8px 0', borderBottom:'1px solid var(--border)'}}>
                <input type="checkbox" checked={it.done} onChange={()=>toggle(it.id)} />
                <span style={{flex:1, textDecoration: it.done ? 'line-through':'none', opacity: it.done ? .6:1}}>{it.text}</span>
                <button className="btn" onClick={()=>remove(it.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
