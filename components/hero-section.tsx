import Image from "next/image"
import { ArticleCard } from "./article-card"

export function HeroSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl md:text-8xl lg:text-8xl font-bold mb-6 text-center md:text-center">
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
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat."
          hasBorder
        />

        <ArticleCard content="Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat." />

        <ArticleCard content="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero." />
      </div>
    </section>
  )
}

function ImageBanner() {
  return (
    <div className="w-full aspect-[2/1] flex items-center justify-center">
          <Image src="/tumba.jpg" width={1300} height={1000} alt="Logo Cristo la Solución"></Image>
    </div>
  )
}

