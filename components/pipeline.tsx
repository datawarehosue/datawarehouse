import { Boxes, Download, Wand2, Database, LineChart, ChevronRight } from "lucide-react"

const STAGES = [
  {
    step: "01",
    icon: Boxes,
    title: "Sources",
    desc: "Transactional databases, CRMs, logs, spreadsheets, and APIs — each with its own format.",
  },
  {
    step: "02",
    icon: Download,
    title: "Extract",
    desc: "Pull raw records from every source system on a schedule without disrupting operations.",
  },
  {
    step: "03",
    icon: Wand2,
    title: "Transform",
    desc: "Clean, deduplicate, standardize, and reshape the data into a consistent model.",
  },
  {
    step: "04",
    icon: Database,
    title: "Load",
    desc: "Write the conformed data into the warehouse, organized for fast analytical queries.",
  },
  {
    step: "05",
    icon: LineChart,
    title: "Analyze",
    desc: "Run reports, dashboards, and mining algorithms against a single source of truth.",
  },
]

export function Pipeline() {
  return (
    <section id="pipeline" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">The pipeline</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            From raw sources to ready-to-query insight
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Data warehousing follows a well-worn path known as ETL — Extract, Transform, Load. Each stage prepares the
            data so that, by the end, analysts and algorithms can ask hard questions and get fast, reliable answers.
          </p>
        </div>

        <ol className="mt-14 grid gap-4 lg:grid-cols-5">
          {STAGES.map((stage, i) => (
            <li key={stage.step} className="relative">
              <div className="h-full rounded-lg border border-border/60 bg-card p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/12 text-primary ring-1 ring-primary/20">
                    <stage.icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{stage.step}</span>
                </div>
                <h3 className="mt-4 font-medium">{stage.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{stage.desc}</p>
              </div>

              {i < STAGES.length - 1 && (
                <ChevronRight
                  className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-primary/50 lg:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
