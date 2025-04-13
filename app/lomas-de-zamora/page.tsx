"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ChangeSection } from "@/components/change-section"
import { EventsSection } from "@/components/events-section"
import { Event } from "@/lib/interfaces"

export default function Home() {
  const events: Event[] = [
    {
      date: "SÁBADO 19/4",
      time: "19:30HS",
      title: "NOCHE DE ADORACIÓN",
    },
    {
      date: "DOMINGO 20/4",
      time: "11:00HS",
      title: "SANTA CENA"
    }
  ]
  return (
    <div className="min-h-screen flex flex-col bg-bg-velorio bg-cover">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <HeroSection />
        <ChangeSection />
        <EventsSection events={events} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

