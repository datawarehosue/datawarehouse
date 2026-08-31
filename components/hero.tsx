import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const STATS = [
  { value: "1", label: "source of truth" },
  { value: "OLAP", label: "query workload" },
  { value: "ETL", label: "load process" },
  { value: "∞", label: "questions answered" },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      {/* subtle grid backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-xs text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            An introduction to data warehousing &amp; data mining
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Turn scattered data into decisions you can trust (CCC).
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A <span className="text-foreground">data warehouse</span> unifies information from every corner of an
            organization into one consistent, query-ready store. <span className="text-foreground">Data mining</span>{" "}
            then digs through it to surface the patterns, trends, and predictions hiding inside. This is how raw records
            become real insight.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" nativeButton={false} className="group h-11 px-6" render={<a href="#pipeline" />}>
              Explore the pipeline
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline" nativeButton={false} className="h-11 px-6" render={<a href="#concepts" />}>
              Warehouse vs. mining
            </Button>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="bg-card px-5 py-6">
              <dt className="font-mono text-2xl font-semibold text-primary md:text-3xl">{stat.value}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
