"use client"
import { useEffect, useState } from "react"

export function Header() {
  const [isCañuelas, setIsCañuelas] = useState(false)
  const [isLomasDeZamora, setIsLomasDeZamora] = useState(false)

  useEffect(() => {
    const pathname = window.location.pathname
    setIsCañuelas(pathname.includes("/canuelas"))
    setIsLomasDeZamora(pathname.includes("/lomas-de-zamora"))
  }, [])
return (
    <header className="border-black">
      <div className="container mx-auto px-4 pt-6">
        <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-blackletter mb-2">Cristo la solución</h1>
        <div className="flex flex-col md:flex-row justify-between text-xs md:text-sm border-t-2 border-b-2 border-black py-2 mt-2">
          <span>EDICIÓN ESPECIAL</span>
          <span>{
            isCañuelas ? "12 DE OCTUBRE 455, CAÑUELAS" :
            isLomasDeZamora ? "LOMAS DE ZAMORA 1300" :
            "JUAN MANUEL DE ROSAS 4357, SAN JUSTO"
          }</span>
          <span>ABRIL 2025</span>
        </div>
      </div>
    </header>
  )
}

