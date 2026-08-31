import { Tags, Network, GitBranch, TrendingUp, AlertTriangle, Layers } from "lucide-react"

const TECHNIQUES = [
  {
    icon: Tags,
    name: "Classification",
    desc: "Assign records to predefined categories — like flagging an email as spam or a loan as high-risk.",
  },
  {
    icon: Network,
    name: "Clustering",
    desc: "Group similar records together without predefined labels to reveal natural segments in the data.",
  },
  {
    icon: GitBranch,
    name: "Association",
    desc: "Discover rules that link items, such as which products are frequently bought together.",
  },
  {
    icon: TrendingUp,
    name: "Regression",
    desc: "Predict a continuous value — forecasting sales, demand, or price from historical trends.",
  },
  {
    icon: AlertTriangle,
    name: "Anomaly Detection",
    desc: "Spot the outliers that break the pattern, from fraudulent charges to failing equipment.",
  },
  {
    icon: Layers,
    name: "Sequence Mining",
    desc: "Find ordered patterns over time, like the path users take before they convert or churn.",
  },
]

export function MiningTechniques() {
  return (
    <section id="techniques" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Techniques</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            The core methods of data mining
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Different questions call for different techniques. These six form the backbone of nearly every mining
            project, each answering a distinct kind of question about the data.
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-3">
          {TECHNIQUES.map((t) => (
            <article key={t.name} className="group bg-card p-6 transition-colors hover:bg-accent">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/12 text-primary ring-1 ring-primary/20">
                <t.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-medium">{t.name}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
