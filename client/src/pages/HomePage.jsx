import { Link } from "react-router-dom";
import fotoBgExample from '/src/assets/foto-ej-portada.jpg'

export default function HomePage() {
    return (
        <>
            {/* Hero section  */}
            <section style={{ backgroundImage: `url(${fotoBgExample})` }} className="flex justify-center items-center p-16 w-full min-h-screen gap-12 bg-cover bg-center text-center text-white">  {/* Revisar ese degradado */}
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

            {/* Description */}
            <section className="flex flex-col justify-center items-center p-20">
                <h2 className="text-4xl sm:text-5xl mb-8">Bisutería artesanal con el corazón</h2>
                <p className="text-neutral-600 w-full max-w-3xl text-center mb-6 text-base/7">Somos un pequeño taller de bisutería artesanal donde cada pieza creada nace de nuestras manos. Trabajamos con piedras naturales cuidadosamente seleccionadas para crear anillos, pulseras, colgantes y pendientes que reflejan la belleza de lo artesanal. Cada diseño es único, pensado para acompañarte en tu día a día.</p>
                <Link to="/sobre-nosotros" className="border border-verde-oscuro py-2 px-5 rounded-full text-verde-oscuro hover:bg-verde-oscuro/80 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Conoce nuestra historia</Link>
            </section>

            {/* Features - ¿Por qué Alas de Colibrí? */}
            <section className="bg-[#3d8f8f]/5 text-center p-20">
                <h2 className="text-4xl sm:text-5xl">¿Por qué Alas de Colibrí?</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    <div className="bg-blanco py-10 px-6 rounded-xl shadow-lg flex flex-col">
                        <h3 className="text-3xl mb-5">Hecho a mano</h3>
                        <p className="text-neutral-700 mt-auto">Cada pieza es creada con dedicación y cuidado, haciendo única cada joya.</p>
                    </div>
                    <div className="bg-blanco py-10 px-6 rounded-xl shadow-lg flex flex-col">
                        <h3 className="text-3xl mb-5">Piedras naturales</h3>
                        <p className="text-neutral-700 mt-auto">Utilizamos piedras semipreciosas auténticas de la mejor calidad.</p>
                    </div>
                    <div className="bg-blanco py-10 px-6 rounded-xl shadow-lg flex flex-col">
                        <h3 className="text-3xl mb-5">Diseño único</h3>
                        <p className="text-neutral-700 mt-auto">Personaliza tu joya o elige entre nuestros diseños artesanales.</p>
                    </div>
                </div>
            </section>

            {/* Jewelry example - Nuestras Creaciones */}
            <section className="bg-gradient-to-br from-[#D4AF37]/10 via-[#FFFCF5] to-[#87A878]/10 text-center p-20">
                <h2 className="text-4xl sm:text-5xl">Nuestras creaciones</h2>
                <p className="mt-3 text-neutral-700">Explora algunos ejemplos de nuestra tienda</p>

                <div className="my-16 flex gap-x-4 gap-y-8 justify-evenly flex-wrap">
                    <div className="bg-white w-[250px] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://images.unsplash.com/photo-1627924448060-09c9b0d229c6?w=250&h=350&fit=crop" alt="anillos" className="rounded-tl-xl rounded-tr-xl" />
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-[heading-text]">Anillos</h3>
                                <p className="text-neutral-700 text-sm">Plata de ley con piedras naturales</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="bg-white w-[250px] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://images.unsplash.com/photo-1643081268670-726891d9ae52?w=250&h=350&fit=crop" alt="pulseras" className="rounded-tl-xl rounded-tr-xl" />
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-[heading-text]">Pulseras</h3>
                                <p className="text-neutral-700 text-sm">Diseños artesanales únicos</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="bg-white w-[250px] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://images.unsplash.com/photo-1727430522198-69a12bd2e969?w=250&h=350&fit=crop" alt="colgantes" className="rounded-tl-xl rounded-tr-xl" />
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-[heading-text]">Colgantes</h3>
                                <p className="text-neutral-700 text-sm">Elegancia y originalidad</p>
                            </figcaption>
                        </figure>
                    </div>

                    <div className="bg-white w-[250px] flex-shrink-0 flex flex-col rounded-xl shadow-lg">
                        <figure className="flex flex-col h-full">
                            <img src="https://images.unsplash.com/photo-1646031348680-0756f9eb8b9e?w=250&h=350&fit=crop" alt="pendientes" className="rounded-tl-xl rounded-tr-xl" />
                            <figcaption className="py-5 px-3 flex flex-col flex-1">
                                <h3 className="md:text-2xl font-[heading-text]">Pendientes</h3>
                                <p className="text-neutral-700 text-sm">Piezas únicas para cada ocasión </p>
                            </figcaption>
                        </figure>
                    </div>
                </div>

                <Link
                    to="/catalogo"
                    className="border border-primary-turquoise text-primary-turquoise px-4 py-3 rounded-full hover:bg-primary-turquoise hover:text-white transition-colors transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                    Ver todas las opciones
                </Link>
            </section>

            {/* Design your ideal jewelry - Creamos Joyas Personalizadas */}
            <section className="bg-[#FFFCF5] flex flex-col justify-center items-center text-center gap-5 p-20">
                <h2 className="text-4xl sm:text-5xl">Diseña tu joya ideal</h2>
                <p className="w-full max-w-2xl text-neutral-700">Elige tu piedra favorita, selecciona un diseño y crea una pieza que sea verdaderamente tuya. O solicita una joya completamente personalizada</p>

                <div className="flex flex-col md:flex-row justify-center items-center gap-4">
                    <Link to="/crear-tu-joya" className="bg-fondo-boton text-white px-5 py-2 rounded-full hover:bg-hover-boton transition-colors transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Crear joya</Link>
                    <Link to="/joya-personalizada" className="border border-verde-oscuro py-2 px-5 rounded-full text-verde-oscuro hover:bg-verde-oscuro/80 hover:text-white transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Solicitar joya personalizada</Link>
                </div>
            </section>
        </>
    )
}