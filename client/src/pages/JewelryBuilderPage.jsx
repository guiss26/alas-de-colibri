import { stones } from "../data/stones"

export default function JewelryBuilderPage() {

    //faltan validaciones y hacer el formulario funcional
    return (
        <>
            <div className="px-7 md:px-20 pt-12 pb-20">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-center">Joya personalizada</h1>
                <p className="mt-5 text-neutral-600 text-center">Creamos joyas personalizadas según tus deseos. Cuéntanos tu idea y la haremos realidad</p>

                <div className="mt-15 lg:flex lg:gap-5">
                    <form className="lg:w-2/3 bg-blanco border border-almond-silk-300/30 p-7 rounded">
                        <h2 className="font-heading-text text-2xl sm:text-3xl md:text-4xl mb-7">Describe tu idea</h2>

                        <div className="flex md:flex-row gap-5">
                            <div className="flex flex-col gap-3 mb-5 w-full">
                                <label htmlFor="name-builder" className="text-sm sm:text-base font-light">Nombre *</label>
                                <input type="text" id="name-builder" name="name-builder" className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base" />
                            </div>

                            <div className="flex flex-col gap-3 mb-5 w-full">
                                <label htmlFor="email-builder" className="text-sm sm:text-base font-light">Email *</label>
                                <input type="text" id="email-builder" name="email-builder" className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 mb-5">
                            <label htmlFor="whatsapp-builder" className="text-sm sm:text-base font-light">WhatsApp</label>
                            <input type="tel" id="whatsapp-builder" name="whatsapp-builder" className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base" />
                        </div>

                        <div className="flex flex-col gap-3 mb-5">
                            <label htmlFor="description-builder" className="text-sm sm:text-base font-light">Descripción de tu joya ideal*</label>
                            <textarea name="description-builder" id="description-builder" placeholder="Cuéntanos todos los detalles: tipo de joya, estilo, tamaño, colores preferidos, ocasión especial..." className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base"></textarea>
                        </div>

                        <div>
                            {/* falta el hover y que se puedan seleccionar  */}
                            <h3 className="mb-5 font-light">Piedras de interés (opcional)</h3>

                            {/* Aquí sería carrusel (?) de piedras o tipo paginación  */}
                            <div className="flex gap-4 mb-5">
                                <div className="border border-almond-silk-300/30 p-3">
                                    <img src="https://images.unsplash.com/photo-1627924448060-09c9b0d229c6?w=150&h=100&fit=crop" alt="piedra" className="mb-2"/>
                                    <p className="text-center text-sm text-neutral-600">Turquesa</p>
                                </div>
                                <div className="border border-almond-silk-300/30 p-3">
                                    <img src="https://images.unsplash.com/photo-1627924448060-09c9b0d229c6?w=150&h=100&fit=crop" alt="piedra" className="mb-2"/>
                                    <p className="text-center text-sm text-neutral-600">Jade Verde</p>
                                </div>
                                <div className="border border-almond-silk-300/30 p-3">
                                    <img src="https://images.unsplash.com/photo-1627924448060-09c9b0d229c6?w=150&h=100&fit=crop" alt="piedra" className="mb-2"/>
                                    <p className="text-center text-sm text-neutral-600">Ambar</p>
                                </div>
                                <div className="border border-almond-silk-300/30 p-3">
                                    <img src="https://images.unsplash.com/photo-1627924448060-09c9b0d229c6?w=150&h=100&fit=crop" alt="piedra" className="mb-2"/>
                                    <p className="text-center text-sm text-neutral-600">Cuarzo rosa</p>
                                </div>
                            </div>

                            <button className="bg-fondo-boton/90 hover:bg-hover-boton w-full py-4 rounded-xl">Enviar solicitud</button>
                        </div>
                    </form>

                    <div className="lg:w-1/3 flex flex-col gap-5">
                        <div className="bg-turquesa-suave-200 p-7">
                            <h2 className="mb-5 text-2xl font-semibold">¿Cómo funciona?</h2>
                            <ol className="flex flex-col gap-6">
                                <li className="font-light text-sm flex items-center gap-3"><span className="bg-azul-pizarra text-white py-2 px-3.5">1</span> Cuéntanos tu idea y preferencias en detalle.</li>
                                <li className="font-light text-sm flex items-center gap-3"><span className="bg-azul-pizarra text-white py-2 px-3">2</span> Te contactamos en 24-48h para discutir tu proyecto.</li>
                                <li className="font-light text-sm flex items-center gap-3"><span className="bg-azul-pizarra text-white py-2 px-3">3</span> Creamos un boceto y presupuesto personalizado.</li>
                                <li className="font-light text-sm flex items-center gap-3"><span className="bg-azul-pizarra text-white py-2 px-3">4</span> Una vez aprobado, comenzamos a crear tu joya.</li>
                            </ol>
                        </div>

                        <div className="bg-blanco border border-almond-silk-300/30 p-7"> 
                            <h2 className="mb-4 text-2xl font-semibold">Tiempo de producción</h2>
                            <p className="text-neutral-600 text-sm">Las joyas personalizadas requieren entre 2-4 semanas de trabajo artesanal, dependiendo de la complejidad del diseño.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}