export const metadata = { title: "Resources • MilSpouse Support" };

const RESOURCES = [
  { name: "Military OneSource", url: "https://www.militaryonesource.mil/", desc: "Free resources for service members & families." },
  { name: "TRICARE", url: "https://www.tricare.mil/", desc: "Health plans, eligibility, and benefits." },
  { name: "Military.com Spouse", url: "https://www.military.com/spouse", desc: "News, benefits overview, career & life." },
  { name: "Commissary", url: "https://www.commissaries.com/", desc: "Defense Commissary Agency—shopping info." },
  { name: "Exchange", url: "https://www.shopmyexchange.com/", desc: "Army & Air Force Exchange Service." }
];

export default function Page() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="h1">Resources</h1>
        <p className="muted">Official links and helpful sites for military spouses.</p>
      </div>
      <div style={{height:16}}/>
      <div className="grid">
        {RESOURCES.map(r => (
          <a key={r.url} className="card" href={r.url} target="_blank" rel="noreferrer">
            <h3 style={{marginBottom:6}}>{r.name}</h3>
            <p className="muted">{r.desc}</p>
          </a>
        ))}
      </div>
      <div style={{height:16}}/>
      <div className="card notice">
        <p className="small">
          Tip: press <span className="kbd">Ctrl</span> + <span className="kbd">K</span> (or ⌘K) to search quickly while browsing resources.
        </p>
      </div>
    </main>
  );
}
