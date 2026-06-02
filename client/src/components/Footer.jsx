import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";

export default function Footer() {
    return (
        <>
            <footer className="bg-footer pt-10 px-4 md:px-10 pb-7 text-white">
                <section className="flex flex-col gap-5 md:flex-row justify-between">
                    <div className="flex-1 flex flex-col gap-3 px-5 ">
                        <h3 className="text-xl text-coffe-caramel">Alas de Colibrí</h3>
                        <p className="text-xs md:text-sm font-light">Bisutería artesanal hecha a mano con y amor y dedicación. Cada pieza es única como tú.</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 px-5">
                        <h3 className="text-xl text-coffe-caramel">Enlaces</h3>
                        <Link className="text-xs md:text-sm font-light" to="/">Inicio</Link>
                        <Link className="text-xs md:text-sm font-light" to="/catalogo">Catálogo</Link>
                        <Link className="text-xs md:text-sm font-light" to="/crear-tu-joya">Crear tu Joya</Link>
                        <Link className="text-xs md:text-sm font-light" to="/joya-personalizada">Joya personalizada</Link>
                        <Link className="text-xs md:text-sm font-light" to="/sobre-nosotros">Sobre Nosotros</Link>
                        <Link className="text-xs md:text-sm font-light" to="/contacto">Contacto</Link>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 px-5">
                        <h3 className="text-xl text-coffe-caramel">Contacto</h3>

                        <div className="flex flex-col gap-2">
                            <p className="text-xs md:text-sm font-light flex items-center gap-1"><LuMail /> anaferm79@gmail.com</p>
                            <Link to="https://www.instagram.com/alasdecolibri_l.a/" className="text-xs md:text-sm font-light flex items-center gap-1"><FaInstagram />alasdecolibri_l.a</Link>
                            <p className="text-xs md:text-sm font-light flex items-center gap-1"><GoLocation /> España</p>
                            {/* a lo mejor poner uno debajo de otro */}
                        </div>

                        {/* <div> a lo mejor poner las tarjetas que se aceptan
                            
                        </div> */}
                    </div>
                </section>

                <section className="text-center mt-8 pt-7 border-t border-neutral-400">
                    <p className="text-xs">© 2026 Alas de Colibrí. Hecho a mano con el corazón.</p>
                </section>
            </footer>
        </>
    )
}