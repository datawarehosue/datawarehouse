import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Pipeline } from "@/components/pipeline"
import { Concepts } from "@/components/concepts"
import { MiningTechniques } from "@/components/mining-techniques"
import { UseCases } from "@/components/use-cases"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <SiteHeader />
      <main>
        <Hero />
        <Pipeline />
        <Concepts />
        <MiningTechniques />
        <UseCases />
      </main>
      <SiteFooter />
    </div>
  )
}
