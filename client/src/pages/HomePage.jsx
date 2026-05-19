
export default function HomePage() {
    return (
        <>
            {/* Hero section  */}
            <section className="md:flex p-15 w-full gap-12">
                <div className="w-3/5 px-10 flex flex-col justify-center">
                    <span>Bisutería artesanal </span> {/* A lo mejor quitarlo  */}

                    <h1 className="md:text-4xl">Joyas únicas, hechas con el corazón</h1>
                    <p className="text-xl">Bienvenido a Alas de Colibrí, donde cada pieza de bisutería es creada artesanalmente con piedras naturales. Diseña tu joya perfecta o elige entre nuestros diseños únicos.</p>

                    <div className="flex gap-3 mt-5"> {/* Cambiar color botones, borde, hover y efectos */}
                        <button className="bg-teal py-2 px-4 rounded-3xl">Crear tu Joya</button>
                        <button className="bg-teal py-2 px-4 rounded-3xl">Conócenos</button>
                    </div>
                </div>

                <figure className="w-2/5 bg-green-300">
                    <img src="https://placehold.co/500x500"  alt="imagen-ejemplo" />
                </figure>

            </section>

            {/* Features - ¿Por qué Alas de Colibrí? */}
            <section></section>
            {/* Jewelry example - Nuestras Creaciones */}
            <section></section>
            {/* Custom Jewerly - Creamos Joyas Personalizadas */}
            <section></section>
        </>
    )
}