import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ChangeSection } from "@/components/change-section"
import { EventsSection } from "@/components/events-section"
import { Event } from "@/lib/interfaces"

export default function Home() {
  const events : Event[] = [
    {
      date: "JUEVES 17/4",
      time: "19:30HS",
      title: "NOCHE DE SANIDAD",
      description:
        "A las 19:30hs, reunión de sanidad junto al pastor Pablo Rocco. Será un tiempo de palabra y oraciones personales. Tenemos fe, porque Jesús nos dijo: «Si puedes creer, al que cree todo le es posible» (S. Marcos 9:23). ¡Es una noche especial, no vengas solo!",
    },
    {
      date: "VIERNES 18/4",
      time: "19:30HS",
      title: "NOCHE DE MINISTRACIÓN",
      description:
        "Un encuentro con Jesús lo cambia todo, por eso a las 19:30 te esperamos para que en un ambiente de fe puedas conectar con el cielo y recibir lo que Dios tiene preparado. Además, estará compartiendo la palabra el pastor Israel Barreto, ¡imperdible!",
    },
    {
      date: "DOMINGO 20/4",
      time: "11 Y 19HS",
      title: "SANTA CENA",
      description:
        "Mediante la santa cena recordaremos a Cristo Jesús, lo que Él hizo a favor de nuestras vidas, y celebraremos que somos participantes de las bendiciones espirituales, ¡tenemos la victoria en Cristo! Seguiremos recibiendo palabra que nos va a estar compartiendo el pastor Israel Barreto. Sea parte de este encuentro a las 11 y 19 hs.",
    },
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

