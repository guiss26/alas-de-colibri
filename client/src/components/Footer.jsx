import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer className="bg-almond-silk-50 p-10 text-neutral-500">
                <section className="flex justify-between ">
                    <div className="flex-1 flex flex-col gap-3 px-5 ">
                        <h3 className="text-xl font-bold ">Alas de Colibrí</h3>
                        <p>Bisutería artesanal hecha a mano con y amor y dedicación. Cada pieza es única como tú.</p>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 px-5">
                        <h3 className="text-xl font-bold">Enlaces</h3>
                        <Link>Inicio</Link>
                        <Link>Crear tu Joya</Link>
                        <Link>Sobre Nosotros</Link>
                        <Link>Contacto</Link>
                    </div>

                    <div className="flex-1 flex flex-col gap-3 px-5">
                        <h3 className="text-xl font-bold">Contacto</h3>

                        <div className="flex items-center gap-4">
                            <p className="flex items-center gap-1"><LuMail /> anaferm79@gmail.com</p>
                            <Link to="https://www.instagram.com/alasdecolibri_l.a/"><FaInstagram /></Link>
                        </div>

                        {/* <div> a lo mejor poner las tarjetas que se aceptan
                            <p><FaInstagram /></p>
                        </div> */}
                    </div>
                </section>

                <section className="text-center mt-8 pt-10 border-t border-neutral-400">
                    <p>© 2026 Alas de Colibrí. Hecho a mano con el corazón.</p>
                </section>
            </footer>
        </>
    )
}