import Image from "next/image"
import { ArticleCard } from "./article-card"

export function HeroSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-8xl lg:text-7xl font-bold mb-6 text-center md:text-center">
        BUENAS NOTICIAS:
        <br />
        ¡VELORIO CANCELADO!
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-3 mb-6">
          <ImageBanner />
        </div>
<ArticleCard
          title="TRAJO SALVACIÓN PARA TU VIDA"
          content={
            <>
              Hace miles de años, una persona tomó una decisión que cambiaría para siempre su destino y el nuestro. Él era
              <span className="font-bold"> Dios</span>, pero vino a la tierra como hombre. La Biblia menciona que:
              <span className="italic"> «estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz» </span>
              <span className="text-black font-semibold">(Filipenses 2:8)</span>.
            </>
          }
          hasBorder
        />

        <ArticleCard
          content={
            <>
              Si esta persona hubiera venido solo como <span className="font-bold">Dios</span>, no habría podido morir en la cruz por nuestros pecados, porque Dios no puede morir, pero el hombre es mortal.
              <br />
              Por eso, vino como hombre y sufrió como hombre. <span className="text-black font-semibold">La sangre, el sudor y las lágrimas fueron reales. El dolor fue real. La muerte fue real.</span>
            </>
          }
        />

        <ArticleCard
          content={
            <>
              Él decidió no abandonarnos y ser traspasado en la cruz, para poder estar con nosotros y servirnos para siempre.
              <br />
              Sin embargo, no celebramos su muerte, sino que anunciamos que <span className="font-bold text-black">su velorio fue cancelado</span>.
              <br />
              Hubo una <span className="text-black font-bold">resurrección</span> que nos recuerda que no tenía por qué quedarse y ser traspasado por nuestros pecados, pero decidió hacerlo,
              <span className="font-bold text-black"> ¡porque nos ama!</span>
            </>
          }
        />
      </div>
    </section>
  )
}

function ImageBanner() {
  return (
    <div className="w-full aspect-[2/1] flex items-center justify-center">
          <Image src="/tumba2.jpg" width={1300} height={1000} alt="Logo Cristo la Solución"></Image>
    </div>
  )
}

