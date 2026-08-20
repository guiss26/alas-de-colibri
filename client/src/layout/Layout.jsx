import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Toaster } from 'react-hot-toast'

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-fondo"> 
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <Toaster position="top-right" className="font-light font-heading"/>
        </div>
    )
}