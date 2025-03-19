import Image from "next/image"

export function EventsSection() {
  const events = [
    {
      speaker: "Josias García",
      image: "/josias.png?height=100&width=100",
      events: [
        {
          title: "NOCHE DE SANIDAD",
          date: "JUEVES 17/4",
          time: "19:30HS",
          highlight: true,
        },
      ],
    },
    {
      speaker: "Israel Barreto",
      image: "/israel.png?height=100&width=100",
      events: [
        {
          title: "NOCHE DE MINISTRACIÓN",
          date: "VIERNES 18/4",
          time: "19:30HS",
          highlight: true,
        },
        {
          title: "SANTA CENA",
          date: "DOMINGO 20/4",
          time: "11 Y 19HS",
          highlight: true,
        },
      ],
    },
  ]

  return (
    <section className="py-12 relative">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 bg-[#f5f2e9] opacity-80 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Decorative border */}
        <div className="border-2 border-black p-6 md:p-10 bg-[#f5f2e9] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]">
          {/* Vintage newspaper header */}
          <div className="text-center mb-8">
            <h2 className="font-bold text-3xl md:text-5xl mb-2 uppercase">Fechas Especiales</h2>
            <div className="flex items-center justify-center">
              <div className="h-px bg-black w-16 md:w-24"></div>
              <p className="mx-4 text-sm md:text-base font-serif italic">Para que otros conozcan a Jesús</p>
              <div className="h-px bg-black w-16 md:w-24"></div>
            </div>
          </div>

          {/* Desktop layout - newspaper columns */}
          <div className="hidden md:grid grid-cols-2 gap-8 md:gap-12">
            {events.map((person, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border border-black p-1 bg-white">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={person.image || "/placeholder.svg"}
                        alt={person.speaker}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl font-serif font-bold">{person.speaker}</h3>
                </div>

                <div className="space-y-4 font-serif">
                  {person.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-b border-gray-400 border-dashed pb-3 last:border-b-0">
                      <div className="inline-block mb-1">
                        <span className={`inline-block px-2 py-1 font-bold ${event.highlight ? "bg-yellow-600/60 rounded-lg" : ""}`}>
                          {event.title}
                        </span>
                      </div>
                      <div className="font-bold">
                        {event.date} {event.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile layout - stacked */}
          <div className="md:hidden space-y-8">
            {events.map((person, index) => (
              <div key={index} className="border-b border-gray-800 pb-6 last:border-b-0 last:pb-0">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden border border-black p-1 bg-white">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={person.image || "/placeholder.svg"}
                        alt={person.speaker}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover grayscale contrast-125"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-serif font-bold">{person.speaker}</h3>
                </div>

                <div className="space-y-3 font-serif">
                  {person.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="border-b border-gray-400 border-dashed pb-2 last:border-b-0">
                      <div className="inline-block mb-1">
                        <span className={`inline-block px-2 py-1 font-bold ${event.highlight ? "bg-yellow-300" : ""}`}>
                          {event.title}
                        </span>
                      </div>
                      <div className="font-bold">
                        {event.date} {event.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Vintage footer */}
          <div className="text-center mt-8 pt-4 border-t-2 border-black">
            <p className="font-serif text-sm italic">Semana Santa 2025</p>
          </div>
        </div>
      </div>
    </section>
  )
}

