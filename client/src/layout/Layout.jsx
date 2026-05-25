import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout() {
    return (
        // El div tiene un bg-neutral- 50
        <div className="flex flex-col min-h-screen bg-fondo"> 
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}