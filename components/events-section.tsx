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
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center uppercase leading-tight">
          Fechas Especiales
          Para Que Otros
          Conozcan
          A Jesús
        </h2>

        <div className="hidden md:flex justify-center gap-16 lg:gap-24">
          {events.map((person, index) => (
            <div key={index} className="max-w-sm">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden ">
                    <Image
                      src={person.image || "/placeholder.svg"}
                      alt={person.speaker}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover grayscale"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{person.speaker}</h3>
                <div className="space-y-4">
                  {person.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex flex-col items-center">
                      <span className={`inline-block px-3 py-1 font-bold ${event.highlight ? "bg-yellow-300/90 rounded-lg" : ""}`}>
                        {event.title}
                      </span>
                      <div className="font-bold mt-1">
                        {event.date} {event.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile layout - stacked */}
        <div className="md:hidden space-y-10">
          {events.map((person, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-black">
                  <Image
                    src={person.image || "/placeholder.svg"}
                    alt={person.speaker}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover grayscale"
                  />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">{person.speaker}</h3>
                <div className="space-y-3">
                  {person.events.map((event, eventIndex) => (
                    <div key={eventIndex}>
                      <div className={`inline-block px-2 py-1 font-bold ${event.highlight ? "bg-bg-dds" : ""}`}>
                        {event.title}
                      </div>
                      <div className="font-bold mt-1">
                        {event.date} {event.time}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

