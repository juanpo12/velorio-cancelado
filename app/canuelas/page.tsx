import { ChangeSection } from "@/components/change-section";
import { EventsSection } from "@/components/events-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { Event } from "@/lib/interfaces";

  const events: Event[] = [
    {
      date: "MIERCOLES 16/4",
      time: "19:30HS",
      title: "NOCHE DE MINISTRACIÓN",
    },
    {
      date: "DOMINGO 20/4",
      time: "10:00",
      title: "SANTA CENA"
    }
  ]

export default function Home() {
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

