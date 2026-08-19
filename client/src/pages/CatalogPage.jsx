import { useState } from "react"
import { jewelry } from "../data/jewelry"

const typeLabels = {
    ring: 'Anillo',
    bracelet: 'Pulsera',
    necklace: 'Collar',
    earring: 'Pendientes'
}

const filters = [
    { label: "Todas", value: "all" },
    { label: "Anillos", value: "ring" },
    { label: "Pulseras", value: "bracelet" },
    { label: "Colgantes", value: "necklace" },
    { label: "Pendientes", value: "earring" },
]

export default function CatalogPage() {
    const [activeFilter, setActiveFilter] = useState("all")
    
    const filteredJewelry = activeFilter === "all" ? jewelry : jewelry.filter(item => item.type === activeFilter)
  
    return (
        <>
            <div className="px-7 md:px-20 pt-12 pb-20 flex flex-col items-center">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-center">Nuestras creaciones</h1>
                <p className="mt-5 text-neutral-600">Piezas únicas hechas a mano con piedras naturales. Encuentra tu inspiración y crea la tuya con nosotros.</p>

                <div className="flex flex-row md:justify-center gap-2 overflow-x-auto scrollbar-hide w-full p-2 px-4 mt-10">
                    {filters.map((filter) => (
                        <button key={filter.value} onClick={() => setActiveFilter(filter.value)} className={`rounded-full py-2 px-5 whitespace-nowrap flex-shrink-0 transition-colors ${activeFilter === filter.value ? "bg-almond-silk-300/60 text-black" : "text-neutral-600 hover:text-black hover:bg-almond-silk-300/60 border border-almond-silk-600/10"} `}>{filter.label} </button>
                    ))}
                </div>

                <section className="mt-12 grid grid-cols-1 gap-6 md:w-[970px] md:grid-cols-[repeat(3,300px)] md:justify-between ">

                    {filteredJewelry.map((item) => (
                        <div key={item.id} className="border border-almond-silk-500/20 w-[300px]">
                            <figure className="grid *:col-start-1 *:row-start-1">
                                <img src={item.image} alt={item.name}/>
                                <span className="uppercase text-neutral-500 bg-neutral-200/70 py-2 px-4 self-start justify-self-end m-3 text-sm">{typeLabels[item.type]}</span>
                            </figure>

                            <figcaption className="p-5">
                                <h3 className="jewerly-title-catalog text-xl font-bold">{item.name}</h3>
                                {/* <span className="text-2xl flex justify-end mt-3 text-dark-turquoise/80 font-bold">{item.stone}</span> */}
                            </figcaption>
                        </div>
                    ))}
                </section>

            </div>
        </>
    )
}