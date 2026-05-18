import { Link } from "react-router-dom";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false) // menú cerrado

    return (
        <>
            {/* el header lo tenía a bg-almond-silk-50  */}
            <header className="bg-almond-silk-100/50 sticky top-0 z-50 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="flex items-center justify-between p-4">
                    {/* logo */}
                    <div className="">
                        <Link to="/" className="flex items-center">
                            <img src="/public/colibri-logo.png" alt="logo" className="size-15" />
                            <div className="text-left">
                                <h2 className="text-sm md:text-xl">Alas de Colibrí</h2>
                                <p className="text-xs">Bisutería artesanal</p>
                            </div>
                        </Link>
                    </div>

                    {/* Navegación Desktop */}
                    <nav className="hidden md:flex gap-2">
                        <Link to="/" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Inicio</Link>
                        <Link to="/crear-tu-joya" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Crear tu Joya</Link>
                        <Link to="/joya-personalizada" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Joya Personalizada</Link>
                        <Link to="/sobre-nosotros" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Sobre Nosotros</Link>
                        <Link to="/contacto" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Contacto</Link>
                    </nav>

                    {/* Botón menu hamburguesa responsive */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Abrir menu">
                        {isOpen ? <IoIosClose className="md:size-8 sm:size-5" />
                            : <IoIosMenu className="md:size-8 sm:size-5" />}
                    </button>

                    {/* Navegación Móvil */}
                    {/* {isOpen && (
                        <nav className="md:hidden flex flex-col bg-red-400 border-t border-gray-100">
                            <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Inicio</Link>
                            <Link onClick={() => setIsOpen(false)} to="/crear-tu-joya" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Crear tu Joya</Link>
                            <Link onClick={() => setIsOpen(false)} to="/joya-personalizada" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Joya Personalizada</Link>
                            <Link onClick={() => setIsOpen(false)} to="/sobre-nosotros" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Sobre Nosotros</Link>
                            <Link onClick={() => setIsOpen(false)} to="/contacto" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Contacto</Link>
                        </nav>
                    )} */}
                </div>
            </header>

            {/* Navegación Móvil */}
            {isOpen && (
                <nav className="md:hidden flex flex-col bg-almond-silk-100/30 border-t border-gray-100">
                    <Link onClick={() => setIsOpen(false)} to="/" className="hover:text-gray-700 hover:bg-almond-silk-100/70 py-3 p-5 text-sm md:text-base">Inicio</Link>
                    <Link onClick={() => setIsOpen(false)} to="/crear-tu-joya" className="hover:text-gray-700 hover:bg-almond-silk-100/70 py-3 p-5  text-sm md:text-base">Crear tu Joya</Link>
                    <Link onClick={() => setIsOpen(false)} to="/joya-personalizada" className="hover:text-gray-700 hover:bg-almond-silk-100/70 py-3 p-5 text-sm md:text-base">Joya Personalizada</Link>
                    <Link onClick={() => setIsOpen(false)} to="/sobre-nosotros" className="hover:text-gray-700 hover:bg-almond-silk-100/70 py-3 p-5 text-sm md:text-base">Sobre Nosotros</Link>
                    <Link onClick={() => setIsOpen(false)} to="/contacto" className="hover:text-gray-700 hover:bg-almond-silk-100/70 py-3 p-5 text-sm md:text-base">Contacto</Link>
                </nav>
            )}
        </>
    )
}