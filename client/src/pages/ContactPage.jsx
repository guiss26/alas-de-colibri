import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"

export default function ContactPage() {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const formRef = useRef()
    const [sending, setSending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    const onSubmit = async() => {
        setSending(true)
        setSuccess(false)
        setError(false)

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            setSuccess(true)
            reset()
        } catch (error) {
            console.error(error)
            setError(true)
        } finally {
            setSending(false)
        }
    }

    return (
        <>
            <div className="px-20 pt-12 pb-20">
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-8xl font-medium text-center">Contacto</h1>
                <h3 className="text-center text-neutral-600 sm:text-xl mt-5 mb-10">¿Tienes alguna pregunta? Nos encantaría saber de ti</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
                    <div className="py-7">
                        <h2 className="font-heading-text text-2xl sm:text-3xl md:text-4xl mb-7">Hablemos</h2>

                        <div className="flex flex-col gap-7">
                            <Link to="mailto:anaferm79@gmail.com" className="flex items-center gap-4">
                                <div className="bg-turquesa-suave-200 p-2.5 rounded">
                                    <LuMail className="text-azul-pizarra" size={25} />
                                </div>
                                <div>
                                    <h3 className="font-contact-h3 text-xl">Email</h3>
                                    <p className="text-neutral-700 text-sm">anaferm79@gmail.com</p>
                                </div>
                            </Link>

                            <Link to="https://wa.me/34606710820" target="_blank" className="flex items-center gap-4">
                                <div className="bg-turquesa-suave-200 p-2.5 rounded">
                                    <BsTelephone className="text-azul-pizarra" size={25} />
                                </div>
                                <div>
                                    <h3 className="font-contact-h3 text-xl">Teléfono</h3>
                                    <p className="text-neutral-700 text-sm">+34 606 71 08 20</p>
                                </div>
                            </Link>

                            <Link to="https://www.instagram.com/alasdecolibri_l.a/" target="_blank" className="flex items-center gap-4">
                                <div className="bg-turquesa-suave-200 p-2.5 rounded">
                                    <FaInstagram className="text-azul-pizarra" size={25} />
                                </div>

                                <div>
                                    <h3 className="font-contact-h3 text-xl">Instagram</h3>
                                    <p className="text-neutral-700 text-sm">alasdecolibri_l.a</p>
                                </div>
                            </Link>
                        </div>

                    </div>

                    <form ref={formRef} className="bg-blanco border border-almond-silk-300/30 p-7 rounded-xl" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="font-heading-text text-2xl sm:text-3xl md:text-4xl mb-7">Envíanos un mensaje</h2>

                        <div className="flex flex-col gap-3 mb-5">
                            <label htmlFor="name" className="text-sm sm:text-base">Nombre</label>
                            <input type="text" id="name" name="name" className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base" {...register('name', {
                                required: true
                            })} />
                            {errors.name?.type === 'required' && <p className="text-red-700">El nombre es obligatorio</p>}
                        </div>

                        <div className="flex flex-col gap-3 mb-5">
                            <label htmlFor="email" className="text-sm sm:text-base">Email</label>
                            <input type="email" id="email" name="email" className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base" {...register('email', {
                                required: true,
                                // pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                            })} />
                            {errors.email?.type === 'required' && <p className="text-red-700">El email es obligatorio</p>} 
                            {errors.email?.type === 'pattern' && <p className="text-red-700">El formato del email es incorrecto</p>}
                        </div>

                        <div className="flex flex-col gap-3 mb-5">
                            <label htmlFor="message" className="text-sm sm:text-base">Mensaje</label>
                            <textarea id="message" name="message" className="bg-almond-silk-100/40 p-3 rounded border border-almond-silk-200/10 text-sm sm:text-base" {...register('message', {
                                required: true
                            })} ></textarea>
                            {errors.message?.type === 'required' && <p className="text-red-700">Este campo es requerido</p>}
                        </div>

                        {success && <p className="text-green-600 mb-4">¡Mensaje enviado correctamente! Te responderemos lo más pronto posible.</p>}
                        {error && <p className="text-red-700 mb-4">Ha ocurrido un error. Por favor inténtalo de nuevo.</p>}


                        <button type="submit" className="bg-almond-silk-300/50 hover:bg-almond-silk-500/40 w-full py-4 rounded-xl" disabled={sending}>
                            {sending ? 'Enviando...' : 'Enviar'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}