const USE_CASES = [
  {
    sector: "Retail",
    headline: "Know what sells, and why",
    desc: "Market-basket analysis and demand forecasting keep shelves stocked and recommendations relevant.",
  },
  {
    sector: "Finance",
    headline: "Catch fraud in real time",
    desc: "Anomaly detection over historical transactions flags suspicious activity before it costs money.",
  },
  {
    sector: "Healthcare",
    headline: "Predict risk earlier",
    desc: "Classification models on patient records help identify at-risk cases and personalize care.",
  },
  {
    sector: "Telecom",
    headline: "Keep customers from leaving",
    desc: "Churn models reveal which subscribers are likely to leave — and what might keep them.",
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Use cases</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Where it pays off
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Warehousing and mining are not academic exercises — they drive decisions in nearly every industry that
            collects data at scale.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {USE_CASES.map((c) => (
            <article
              key={c.sector}
              className="rounded-lg border border-border/60 bg-card p-7 transition-colors hover:border-primary/40"
            >
              <span className="font-mono text-xs uppercase tracking-widest text-primary">{c.sector}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{c.headline}</h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">{c.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
