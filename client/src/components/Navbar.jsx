import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <>
            {/* el header lo tenía a bg-almond-silk-50  */}
            <header className="bg-almond-silk-100/50 sticky top-0 z-50 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="flex items-center justify-between p-4">
                    {/* logo */}
                    <div className="">
                        <button className="flex items-center">
                            <img src="/public/colibri-logo.png" alt="logo"  className="size-15"/>
                            <div className="text-left">
                                <h2 className="text-xl">Alas de Colibrí</h2>
                                <p className="text-xs">Bisutería artesanal</p>
                            </div>
                        </button>
                    </div>

                    {/* navegación  */}
                    <nav className="flex gap-2">
                        <Link to="/" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Inicio</Link>
                        <Link to="/crear-tu-joya" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Crear tu Joya</Link>
                        <Link to="/joya-personalizada" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Joya Personalizada</Link>
                        <Link to="/sobre-nosotros" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Sobre Nosotros</Link>
                        <Link to="/contacto" className="hover:text-gray-700 hover:bg-almond-silk-100/70 p-3">Contacto</Link>
                    </nav>
                </div>
            </header>
        </>
    )
}