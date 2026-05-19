import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="bg-turquesa-suave-200 pt-10 px-4 md:px-10 pb-7 text-neutral-700">
                <section className="flex flex-col gap-5 md:flex-row justify-between">
                    <div className="flex-1 flex flex-col gap-3 px-5 ">
                        <h3 className="text-xl font-bold ">Alas de Colibrí</h3>
                        <p className="text-xs md:text-base">Bisutería artesanal hecha a mano con y amor y dedicación. Cada pieza es única como tú.</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 px-5">
                        <h3 className="text-xl font-bold">Enlaces</h3>
                        <Link className="text-xs md:text-base">Inicio</Link>
                        <Link className="text-xs md:text-base">Crear tu Joya</Link>
                        <Link className="text-xs md:text-base">Sobre Nosotros</Link>
                        <Link className="text-xs md:text-base">Contacto</Link>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 px-5">
                        <h3 className="text-xl font-bold">Contacto</h3>

                        <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
                            <p className="text-xs flex items-center gap-1 md:text-base"><LuMail /> anaferm79@gmail.com</p>
                            <Link to="https://www.instagram.com/alasdecolibri_l.a/" className="text-xs flex items-center gap-1 md:text-base"><FaInstagram />alasdecolibri_l.a</Link>
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