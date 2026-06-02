import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
// import App from "../App";
import CustomJewelryPage from "../pages/CustomJewelryPage";
import JewelryBuilderPage from "../pages/JewelryBuilderPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import CatalogPage from "../pages/CatalogPage";

const routerClient = createBrowserRouter([{
    path: "/",
    element: <Layout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: "catalogo",
            element: <CatalogPage />
        },
        {
            path: "crear-tu-joya",
            element: <CustomJewelryPage />
        }, 
        {
            path: "joya-personalizada",
            element: <JewelryBuilderPage />
        }, 
        {
            path: "sobre-nosotros",
            element: <AboutPage />
        },
        {
            path: "contacto",
            element: <ContactPage />
        }
    ]
}])

export default routerClient