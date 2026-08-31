import { Database } from "lucide-react"
import { Button } from "@/components/ui/button"

const NAV = [
  { label: "Pipeline", href: "#pipeline" },
  { label: "Concepts", href: "#concepts" },
  { label: "Techniques", href: "#techniques" },
  { label: "Use Cases", href: "#use-cases" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary ring-1 ring-primary/25">
            <Database className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="font-mono text-sm font-medium tracking-tight">Datawarehouse</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button size="sm" nativeButton={false} className="h-9 px-4 font-medium" render={<a href="#pipeline" />}>
          Start learning
        </Button>
      </div>
    </header>
  )
}
