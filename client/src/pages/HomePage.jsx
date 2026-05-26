import { Link } from "react-router-dom";
import fotoBgExample from '/src/assets/foto-ej-portada.jpg'

export default function HomePage() {
    return (
        <>
            {/* Hero section  */}
            <section style={{ backgroundImage: `url(${fotoBgExample})`}} className="flex justify-center items-center p-16 w-full min-h-screen gap-12 bg-cover bg-center text-center text-white">  {/* Revisar ese degradado */}
                <div className="w-3xl flex flex-col items-center gap-5">
                    <h1 className="text-4xl sm:text-6xl md:text-8xl font-medium">Joyas únicas, hechas con el corazón</h1>
                    <p className="md:text-xl font-light mx-7">Bienvenido a Alas de Colibrí, donde cada pieza de bisutería es creada artesanalmente con piedras naturales. Diseña tu joya perfecta o elige entre nuestros diseños únicos.</p>

                    <div className="flex gap-3 mt-5"> {/* Cambiar color botones, borde, hover y efectos */}
                        {/* Botón principal — acción principal */}
                        <Link
                            to="/crear-tu-joya"
                            className="bg-fondo-boton text-white px-5 py-2 rounded-full hover:bg-hover-boton transition-colors transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Crear tu Joya
                        </Link>

                        {/* Botón secundario — acción secundaria */}
                        <Link
                            to="/sobre-nosotros"
                            className="border border-fondo-boton text-fondo-boton px-5 py-2 rounded-full hover:bg-meet-boton/40 hover:text-white transition-colors transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Conócenos
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features - ¿Por qué Alas de Colibrí? */}
            <section className="bg-[#3d8f8f]/5 text-center p-20">
                <h2 className="md:text-3xl">¿Por qué Alas de Colibrí?</h2>

                <div className="flex gap-8 mt-10">
                    {/* cambiar texto referencia insta  */}
                    <div className="bg-blanco py-10 px-6 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-5">Hecho a mano</h3>
                        <p>Cada pieza es creada con dedicación y cuidado, haciendo única cada joya.</p>
                    </div>
                    <div className="bg-blanco py-10 px-6 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-5">Piedras naturales</h3>
                        <p>Utilizamos piedras semipreciosas auténticas de la mejor calidad.</p>
                    </div>
                    <div className="bg-blanco py-10 px-6 rounded-xl shadow-lg">
                        <h3 className="text-3xl font-bold mb-5">Diseño único</h3>
                        <p>Personaliza tu joya o elige entre nuestros diseños artesanales.</p>
                    </div>
                </div>
            </section>

            {/* Jewelry example - Nuestras Creaciones - SE DESBORDA LAS TARJETAS*/}
            <section className="bg-gradient-to-br from-[#D4AF37]/10 via-[#FFFCF5] to-[#87A878]/10 text-center p-20">
                <h2 className="md:text-3xl">Nuestras creaciones</h2>
                <p className="mt-3">Explora algunos ejemplos de nuestra bisutería artesanal</p>

                {/* enseñar solo 3 */}
                <div className="my-16 flex gap-6 justify-center">
                    <div className="bg-white w-[250`x] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://placehold.co/250x350" alt="anillos" className="rounded-tl-xl rounded-tr-xl"/>
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-bold">Anillos</h3>
                                <p>Plata de ley con piedras naturales</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="bg-white w-[250`x] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://placehold.co/250x350" alt="pulseras" className="rounded-tl-xl rounded-tr-xl"/>
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-bold">Pulseras</h3>
                                <p>Diseños artesanales únicos</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="bg-white w-[250`x] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://placehold.co/250x350" alt="colgantes" className="rounded-tl-xl rounded-tr-xl"/>
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-bold">Colgantes</h3>
                                <p>Elegancia y originalidad</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="bg-white w-[250`x] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://placehold.co/250x350" alt="pendientes" className="rounded-tl-xl rounded-tr-xl"/>
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-bold">Pendientes</h3>
                                <p>Piezas únicas para cada ocasión </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                
                <Link
                    to="/crea-tu-joya"
                    className="border border-primary-turquoise text-primary-turquoise px-4 py-3 rounded-full hover:bg-primary-turquoise hover:text-white transition-colors transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Ver todas las opciones
                </Link>
            </section>

            {/* Custom Jewerly - Creamos Joyas Personalizadas */}
            <section className="bg-[#FFFCF5] text-center p-20">
                <h2 className="md:text-3xl">¿Tienes una idea especial?</h2>
                <p>Creamos joyas personalizadas según tus deseos. Cuéntanos tu idea y la haremos realidad</p>

                <Link to="/joya-personalizada">Solicitar joya personalizada</Link>
            </section>
        </>
    )
}