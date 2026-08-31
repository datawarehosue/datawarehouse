import { Warehouse, Pickaxe, Check } from "lucide-react"

const COLUMNS = [
  {
    icon: Warehouse,
    tag: "The store",
    title: "Data Warehouse",
    summary:
      "A central repository built specifically for analysis. It integrates data from many systems, keeps a historical record, and is optimized for reading large volumes at once.",
    points: [
      "Subject-oriented — organized around business topics",
      "Integrated — consistent formats across all sources",
      "Time-variant — retains history for trend analysis",
      "Non-volatile — loaded once, read many times",
    ],
  },
  {
    icon: Pickaxe,
    tag: "The discovery",
    title: "Data Mining",
    summary:
      "The process of exploring that stored data to discover meaningful patterns and relationships — knowledge that no one explicitly wrote down but the data implies.",
    points: [
      "Finds patterns humans would miss at scale",
      "Powers prediction, segmentation, and detection",
      "Blends statistics with machine learning",
      "Turns historical data into forward-looking insight",
    ],
  },
]

export function Concepts() {
  return (
    <section id="concepts" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Concepts</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Two ideas that work together
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            People often confuse the two. The warehouse is <span className="text-foreground">where</span> trustworthy
            data lives; mining is <span className="text-foreground">how</span> you extract knowledge from it. One
            enables the other.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {COLUMNS.map((col) => (
            <article key={col.title} className="rounded-lg border border-border/60 bg-card p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/12 text-primary ring-1 ring-primary/20">
                <col.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-5 font-mono text-xs uppercase tracking-widest text-muted-foreground">{col.tag}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight">{col.title}</h3>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{col.summary}</p>

              <ul className="mt-6 space-y-3 border-t border-border/60 pt-6">
                {col.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                    <span className="leading-relaxed text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
