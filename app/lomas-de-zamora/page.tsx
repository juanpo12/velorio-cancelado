import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ChangeSection } from "@/components/change-section"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-velorio bg-cover">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <HeroSection />
        <ChangeSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

