import { useState } from "react";

export default function ExploreStartupsDark() {
  const [search, setSearch] = useState("");

  const startups = [
    { name: "EcoFlow", industry: "Clean Energy", description: "Portable power solutions for sustainable living." },
    { name: "MediLink", industry: "HealthTech", description: "Connecting patients with healthcare providers instantly." },
    { name: "FinPilot", industry: "FinTech", description: "AI tools for smarter personal finance." },
    { name: "AgroNova", industry: "AgriTech", description: "Innovating agriculture through smart sensors." },
   
  ];

  const filtered = startups.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.industry.toLowerCase().includes(search.toLowerCase()) ||
    s.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">
      
      <div className="max-w-5xl mx-auto">
    
        <header className="text-center mb-10">
          <h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2"
            style={{ textShadow: "0 0 18px rgba(99,102,241,0.85)" }}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-violet-400">
              Explore Startups
            </span>
          </h1>
          <p className="text-sm sm:text-base text-indigo-200/60">
            Discover innovative startups shaping the future.
          </p>
        </header>

       
        <div className="mb-12">
          <label className="sr-only">Search startups</label>
          <div
            className="relative rounded-2xl border border-indigo-700/40 overflow-hidden"
            style={{
              boxShadow: "0 0 40px rgba(79,70,229,0.08)",
            }}
          >
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, industry or description..."
              className="w-full px-5 py-4 bg-black/30 placeholder-indigo-200/40 text-white outline-none"
              style={{
                borderRadius: "1rem",
                boxShadow:
                  "0 0 30px rgba(99,102,241,0.12) inset, 0 0 18px rgba(59,130,246,0.06)",
              }}
            />
           
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                border: "1px solid rgba(99,102,241,0.18)",
                boxShadow: "0 0 22px rgba(99,102,241,0.18)",
              }}
            />
          </div>
        </div>

        
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((s, i) => (
            <article
              key={i}
              className="relative rounded-2xl p-6 bg-gradient-to-b from-black/60 to-neutral-900/70 border border-indigo-800/30"
              style={{
                boxShadow: "0 6px 30px rgba(2,6,23,0.6), 0 0 18px rgba(99,102,241,0.06)",
                backdropFilter: "blur(6px)",
              }}
            >
             
              <div
                aria-hidden
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.06), 0 0 18px rgba(79,70,229,0.06)",
                }}
              />

              <h3 className="relative text-xl font-semibold mb-1" style={{ zIndex: 1 }}>
                {s.name}
              </h3>
              <p
                className="relative text-indigo-300 text-sm font-medium mb-3"
                style={{ zIndex: 1 }}
              >
                {s.industry}
              </p>
              <p className="relative text-sm text-indigo-100/80 mb-4" style={{ zIndex: 1 }}>
                {s.description}
              </p>

              <div className="relative z-10">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-500/40 text-indigo-50 text-sm transition transform hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(86,61,255,0.12), rgba(59,130,246,0.06))",
                    boxShadow: "0 6px 20px rgba(79,70,229,0.12), 0 0 18px rgba(99,102,241,0.14)",
                  }}
                >
                  <span className="px-2 py-1 rounded-md" style={{ boxShadow: "0 0 8px rgba(99,102,241,0.35)" }}>
                    View More
                  </span>
                </button>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center text-indigo-200/60 py-10">
              No startups found.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
