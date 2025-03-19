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
          content="Hace miles de años, una persona tomó una decisión que cambiaría para siempre su destino y el nuestro. Él era Dios, pero vino a la tierra como hombre. La Biblia menciona que: «estando en la condición de hombre, se humilló a sí mismo, haciéndose obediente hasta la muerte, y muerte de cruz» (Filipenses 2:8)."
          hasBorder
        />

        <ArticleCard content="Si esta persona hubiera venido solo como Dios, no habría podido morir en la cruz por nuestros pecados, porque Dios no puede morir, pero el hombre es mortal. Por eso, vino como hombre y sufrió como hombre. La sangre, el sudor y las lágrimas fueron reales. El dolor fue real. La muerte fue real." />

        <ArticleCard content="Él decidió no abandonarnos y ser traspasado en la cruz, para poder estar con nosotros y servirnos para siempre. Sin embargo, no celebramos su muerte, sino que anunciamos que su velorio fue cancelado. 
        Hubo una resurrección que nos recuerda que no tenía por qué quedarse y ser traspasado por nuestros pecados, pero decidió hacerlo, ¡porque nos ama!" />
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

