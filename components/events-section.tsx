export function EventsSection() {
  const events = [
    {
      date: "JUEVES 17/4",
      time: "19:30HS",
      title: "NOCHE DE SANIDAD",
      description:
        "A las 19:30hs, reunión de sanidad junto al pastor Josías García. Será un tiempo de palabra y oraciones personales. Tenemos fe, porque Jesús nos dijo: «Si puedes creer, al que cree todo le es posible» (S. Marcos 9:23). ¡Es una noche especial, no vengas solo!",
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
}: { date: string; time: string; title: string; description: string }) {
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

