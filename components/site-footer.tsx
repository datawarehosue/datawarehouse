import { Database, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to see your data more clearly?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            You now know the vocabulary — sources, ETL, the warehouse, and the mining techniques that turn stored
            records into knowledge. That is the foundation everything else builds on.
          </p>
          <div className="mt-8 flex justify-center">
            <Button size="lg" nativeButton={false} className="group h-11 px-6" render={<a href="#top" />}>
              Revisit the pipeline
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/25">
            <Database className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className="font-mono text-sm">Datawarehouse</span>
        </div>
        <p className="text-sm text-muted-foreground">An educational introduction to warehousing &amp; mining.</p>
      </div>
    </footer>
  )
}
