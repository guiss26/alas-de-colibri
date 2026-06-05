import coverPhoto from "../assets/foto-ej-about.jpg"
export default function AboutPage() {
    return (
        <>
            <div className="px-20 pt-14 pb-20">
                <h1 className="text-center text-4xl sm:text-6xl md:text-8xl font-medium">Sobre nosotros</h1>
                <p className="text-center text-neutral-600 mt-5 text-xl">Unidos por la pasión de crear joyas únicas</p>

                <div className="md:flex justify-center mt-10 gap-8">
                    <div className="w-full md:w-1/2 h-64 sm:h-96 md:h-[500px]">
                        <img src={coverPhoto} alt="foto portada" className="w-full h-full object-cover object-center" />
                    </div>

                    <div className="mt-6 md:mt-0 px-6 py-3 md:px-10 md:py-5 flex flex-col gap-4 w-full md:w-1/2 bg-neutral-50">
                        <h2 className="text-4xl sm:text-5xl mb-4">Nuestra historia</h2>
                        <p className="text-neutral-700">Alas de Colibrí nació del sueño compartido y apasionado por la bisutería y las piedras naturales. Aportamos la visión única al proceso creativo, desde la seleeción cuidadosa de cada piedra hasta el último detalle del diseño</p>
                        <p className="text-neutral-700">Trabajamos con plata y piedras semipreciosas, combinando técnicas tradicionales con diseños contemporáneos. Cada pieza que creamos es única, elaborada a mano en nuestro pequeño taller, donde el tiempo se detiene para dar vida a joyas que cuentan historias.</p>
                        <p className="text-neutral-700">Nos inspira la naturaleza, la geometría orgánica y la belleza imperfecta de lo artesanal. Creemos que una joya no es solo un adorno, sino una expresión personal que acompaña momentos especiales de tu vida</p>

                        <span className="text-pearl-aqua-700">Gracias por confiar en nuestro trabajo y por valorar lo hecho a mano</span>
                    </div>
                </div>
            </div>
        </>
    )
}