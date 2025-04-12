"use client"
import { Calendar, MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-blackletter mb-4">Cristo la Solución</h3>
            <p className="text-sm">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contáctenos</h3>
            <ContactInfo />
          </div>
        </div>
      </div>
    </footer>
  )
}

export function ContactInfo() {
  const path = window.location.pathname
  const isCañuelas = path.includes("/canuelas")
  const isLomasDeZamora = path.includes("/lomas-de-zamora")
  return (
    <div className="space-y-2 text-sm">
      <p className="flex items-center gap-2">
        <MapPin size={16} />
        <span>{isCañuelas ? "12 DE OCTUBRE 455, CAÑUELAS" : isLomasDeZamora ? "Lomas de Zamora 1300" : "Juan Manuel de Rosas 4357, San Justo"}</span>
      </p>
      <p className="flex items-center gap-2">
        <Phone size={16} />
        <span>+54 9 1128648642</span>
      </p>
      <p className="flex items-center gap-2">
        <Mail size={16} />
        <span>oficinasclsj@gmail.com</span>
      </p>
      <p className="flex items-center gap-2">
        <Calendar size={16} />
        <span>Servicios: Domingos 11:00 y 19:00</span>
      </p>
    </div>
  )
}

