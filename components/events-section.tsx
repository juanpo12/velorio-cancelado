import { Event } from "@/lib/interfaces";

export function EventsSection({ events }: { events: Event[] }) {

  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
        HAY UN LUGAR Y UNA FECHA PARA CONOCER
        <br />A ESA PERSONA QUE CAMBIA TODO
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>

      <div className="text-center text-sm border-t-2 border-black pt-4">SEMANA SANTA 2025</div>
    </section>
  )
}

function EventCard({
  date,
  time,
  title,
  description,
}: { date: string; time: string; title: string; description?: string }) {
  return (
    <div>
      <h3 className="text-xl font-bold mb-2">
        {date}
        <br />
        {time}: {title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  )
}

