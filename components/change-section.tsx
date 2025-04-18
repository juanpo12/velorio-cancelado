/* eslint-disable react/no-unescaped-entities */
import { ArticleCard } from "./article-card"

export function ChangeSection() {
  return (
    <section className="hidden md:block mb-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">UN CAMBIO ES POSIBLE</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <ArticleCard
          content={
            <>
              <span className="font-bold">¿Estás insatisfecho con tu vida?</span> Muchas personas se encuentran cansadas, desalentadas, vacías e insatisfechas, pero <span className="font-bold">un cambio es posible</span>.
              <br /><br />
              Este cambio depende de que decidamos diferente, porque si seguimos haciendo las mismas cosas que hemos hecho siempre, tendremos la vida que hemos tenido siempre. Entonces, tenemos que tomar una decisión, y es la más importante que haremos jamás.
              <br /><br />
              <span className="font-bold">Dios envió a su único Hijo</span> para pagar el castigo de nuestros pecados. Él fue crucificado y derramó su sangre inocente como pago por nuestros errores. Murió y fue sepultado, pero al tercer día resucitó de los muertos y ahora está sentado en el cielo, a la derecha de Dios Padre.
            </>
          }
          hasParagraphs
        />

        <ArticleCard
          content={
            <>
              Él es nuestra <span className="font-bold">única esperanza</span> de tener paz, gozo y un futuro:
              <br />
              <span className="italic">"Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza"</span> <span className="font-bold">(Jeremías 29:11)</span>.
              <br /><br />
              Nadie puede tomar esta decisión por nosotros, así que te pregunto: <span className="font-bold">¿Quieres tener una relación con Dios aquí en la tierra y vivir con Él por la eternidad?</span> <br />
              <span className="font-bold">¿Qué calidad de vida deseas tener?</span>
            </>
          }
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

