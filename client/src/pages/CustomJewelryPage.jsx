import { stones } from "../data/stones"
import { designs } from "../data/designs"
import { useState } from "react"

export default function CustomJewelryPage() {
    const [stoneClicked, setStoneClicked] = useState(null)
    const [designClicked, setDesignClicked] = useState(null)
    const [quantity, setQuantity] = useState(1)

    const LABOR_COST = 5
    const SHIPPING = { single: 3, multiple: 4 }


    const handleClickStone = (id) => {
        console.log("diste clic a una piedra con el id: " + id)
        setStoneClicked(id)
    }

    const handleClickDesign = (id) => {
        console.log("Se ha seleccionado el diseño con el id: " + id)
        setDesignClicked(id)
    }

    const calculateTotal = () => {
        if (!stoneClicked || !designClicked) return null
        const stonePrice = stoneClicked.price * quantity
        const designPrice = designClicked.price * quantity
        const labor = LABOR_COST * quantity
        const shipping = quantity > 1 ? SHIPPING.multiple : SHIPPING.single
        const total = stonePrice + designPrice + labor + shipping

        return { stonePrice, designPrice, labor, shipping, total }
    }

    const summary = calculateTotal()

    return (
        <>
            <div className="px-7 md:px-20 pt-12 pb-20">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-medium text-center">Crea tu joya 🚧</h1>
                <p className="mt-3 text-neutral-600 text-center">Selecciona tu piedra favorita y un diseño para crear una pieza única</p>

                <div className="lg:flex lg:gap-15 mt-10">
                    <div className="mt-1 lg:w-3/5">
                        {/* Choose a stone */}
                        <div className="mb-10">
                            <h2 className="mb-5 text-2xl font-semibold">1. Elige tu piedra</h2>
                            <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-4">
                                {stones.map((stone) => (
                                    < div onClick={() => setStoneClicked(stone)} key={stone.id} className={`border bg-white p-3 flex-shrink-0 w-[150px] shadow-md ${stoneClicked === stone ? "border-2 border-links-hover" : "border-almond-silk-300/30"}`}>
                                        <img src={stone.image} alt={stone.name} className="mb-2" width={150} height={100} />
                                        <p className="text-sm text-neutral-600 mb-1">{stone.name}</p>
                                        <span className="text-links-hover font-bold">{stone.price} €</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/*2. Choose a design */}
                        <div className="mb-10">
                            <h2 className="mb-5 text-2xl font-semibold">2. Elige tu diseño</h2>
                            <div className="flex gap-3">
                                {designs.map((design) => (
                                    <div onClick={() => setDesignClicked(design)} key={design.id} className={`border bg-white p-3 shadow-md ${designClicked === design ? "border-2 border-links-hover" : "border-almond-silk-300/30"}`}>
                                        <img src={design.imagen} alt={design.name} className="mb-2" width={150} height={100} />
                                        <p className="text-sm text-neutral-600 mb-1">{design.name} </p>
                                        <span className="text-links-hover font-bold">{design.price} €</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Choose options */}
                        <div className="mb-3">
                            <h2 className="mb-5 text-2xl font-semibold">3. Opciones</h2>
                            <div className="bg-blanco border border-almond-silk-300/30 p-7 shadow-sm">
                                <p className="text-sm ">Cantidad</p>
                                <input type="number" name="quantity" id="quantity" value={quantity} className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base font-light" min={1} max={10} defaultValue={1} onChange={(e) => setQuantity(Number(e.target.value))} />
                            </div>
                        </div>
                    </div>

                    {/* Resumen pedido */}
                    <div className="self-start lg:w-2/5 bg-blanco border border-almond-silk-300/30 p-7 shadow-md">
                        <h2 className="mb-5 text-2xl font-semibold">Resumen</h2>

                        {!summary ? (
                            <p className="font-light text-sm">Selecciona una piedra y un diseño para ver el precio.</p>
                        ) : (
                            <div className="flex flex-col gap-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-neutral-600">Piedra: {stoneClicked.name} </span>
                                    <span>{summary.stonePrice.toFixed(2)} €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-600">Diseño: {designClicked.name}</span>
                                    <span>{summary.designPrice.toFixed(2)} €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-600">Mano de obra: </span>
                                    <span>{summary.labor.toFixed(2)} €</span>
                                </div>
                                <hr className="border-almond-silk-300/30 my-1" />
                                <div className="flex justify-between">
                                    <span className="text-neutral-600">Subtotal: (x{quantity}) </span>
                                    <span>{(summary.stonePrice + summary.designPrice + summary.labor).toFixed(2)} €</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-neutral-600">Envío:</span>
                                    <span>{summary.shipping.toFixed(2)} €</span>
                                </div>
                                <hr className="border-neutral-500 my-2" />
                                <div className="flex justify-between">
                                    <span className="font-bold">Total:</span>
                                    <span className="text-links-hover font-medium">{summary.total.toFixed(2)} €</span>
                                </div>

                                <hr className="border-almond-silk-300/30 my-2" />
                                <form action="">
                                    <p className="mb-3 font-data-jewelry text-xl font-medium">Tus datos</p>

                                    <div className="flex flex-col gap-3">
                                        <input type="text" className="py-2 p-3 bg-almond-silk-100/40 rounded border border-almond-silk-200/10 text-xs sm:text-base font-light" placeholder="Nombre" />
                                        <input type="text" className="py-2 p-3 bg-almond-silk-100/40 rounded border border-almond-silk-200/10 text-xs sm:text-base font-light" placeholder="Email" />
                                        <input type="text" className="py-2 p-3 bg-almond-silk-100/40 rounded border border-almond-silk-200/10 text-xs sm:text-base font-light" placeholder="Teléfono (opcional)" />
                                    </div>

                                    <button type="submit" className="bg-fondo-boton/90 hover:bg-hover-boton w-full py-3 rounded mt-5">Proceder al pago</button>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </div >
        </>
    )
}