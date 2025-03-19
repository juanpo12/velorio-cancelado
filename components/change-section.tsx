import { ArticleCard } from "./article-card"

export function ChangeSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">UN CAMBIO ES POSIBLE</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ArticleCard
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero. Lorem ipsum dolor sit amet.`}
          hasParagraphs
        />

        <ArticleCard
          content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.

Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero.`}
          hasParagraphs
        />

        <HighlightCard
          title="¿QUIÉN ES ESA PERSONA?"
          content={`Si necesitas sentirte amado, si necesitas un amigo, si necesitas que tus pecados sean perdonados y si necesitas un futuro... Jesucristo es tu respuesta. Él está esperando darte una nueva vida y hacer de ti una nueva creación. 
          No te preocupes, Él no te cargará con culpa y condenación. Te recordará la cruz y te dirá: «Tus pecados ya están perdonados. Ya pagué el precio por tus pecados en el calvario. Recibe y descansa en mi perdón y amor por ti».`}
        />
      </div>
    </section>
  )
}

function HighlightCard({ title, content }: { title: string; content: string }) {
  return (
    <div className="bg-[#6b6a6f] text-white p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {content.split("\n\n").map((paragraph, index) => (
        <p key={index} className={`text-sm leading-relaxed ${index > 0 ? "mt-4" : ""}`}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}

