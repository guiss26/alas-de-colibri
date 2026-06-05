# Alas de Colibrí - Bisutería artesanal

Tienda online para un pequeño negocio de bisutería artesanal. Proyecto real desarrollado como freelance, con configurador de joyas interactivo y presupuesto en tiempo real.

> 🚧 **En desarrollo** — Frontend desplegado en Vercel · Backend en construcción

## 🌐 Demo

🔗 [Ver en vivo](https://alas-de-colibri.vercel.app) &nbsp;|&nbsp; 📁 [Repositorio](https://github.com/guiss26/alas-de-colibri.git)


---

## ✨ Funcionalidades

- **Página principal** — Presentación del negocio con secciones hero, descripción, características, ejemplos de joyas y llamada a la acción
- **Catálogo** — Galería de joyas con filtros por tipo (anillos, pulseras, colgantes, pendientes)
- **Crea tu joya** — Selección de piedra + diseño + extras con cálculo de presupuesto en tiempo real
- **Joya personalizada** — Formulario de solicitud con piedras disponibles para proyectos a medida
- **Sobre nosotros** — Historia y valores del negocio
- **Contacto** — Formulario con validación

---

## Stack

### Frontend
| Tecnología | Uso |
|---|---|
| React 18 | Construcción de la interfaz de usuario |
| Vite | Entorno de desarrollo rápido |
| Tailwind CSS | Estilos y diseño responsive |
| React Router DOM | Navegación entre páginas |
| React Hook Form | Gestión y validación de formularios |
| react-icons | Iconografía |
| Fetch | Llamadas a la API |

### Backend _(en desarrollo)_
| Tecnología | Uso |
|---|---|
| Node.js | Entorno de ejecución |
| Express | Framework de servidor |
| MongoDB Atlas | Base de datos |
| Mongoose | ODM para MongoDB |
| Cloudinary | Almacenamiento y gestión de imágenes |
| Stripe | Pasarela de pagos |
| JWT | Autenticación |

---

## 📁 Estructura del proyecto

```
bisuteria-shop/
├── client/                  # Frontend React + Vite
│   └── src/
│       ├── components/      # Navbar, Footer
│       ├── data/            # Datos estáticos (stones, designs, extras, jewelry)
│       ├── layout/          # Layout con Navbar, Outlet y Footer
│       ├── pages/           # HomePage, CatalogPage, AboutPage...
│       ├── router/          # Configuración de rutas
│
├── server/                  # Backend Node + Express (en construcción)
│   └── index.js
│
├── .env                     # Variables de entorno (no incluido en el repo)
└── README.md
```

---

## Instalación y uso local

### Requisitos previos
- Node.js v18 o superior
- npm v9 o superior

### Frontend

```bash
cd client
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Backend
```bash
cd server
npm install
npm run dev
```

El servidor corre en [http://localhost:3001](http://localhost:3001)

### Variables de entorno

> ⚠️ Solo necesarias cuando el backend esté activo.

Crea un archivo `.env` en la raíz del proyecto con estas variables:

```
MONGODB_URI=tu_conexion_mongodb
STRIPE_SECRET_KEY=tu_clave_stripe
CLOUDINARY_CLOUD_NAME=tu_cloud_name
CLOUDINARY_API_KEY=tu_api_key
CLOUDINARY_API_SECRET=tu_api_secret
PORT=3001
```

---

## 📦 Deploy

| Servicio | Plataforma |
|---|---|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Render](https://render.com) |
| Base de datos | [MongoDB Atlas](https://www.mongodb.com/atlas) |
| Imágenes | [Cloudinary](https://cloudinary.com) |

---

## 🗺️ Roadmap

- [x] Estructura del proyecto y configuración
- [x] Header responsive con menú hamburguesa
- [x] HomePage completa
- [ ] CatalogPage con filtros
- [ ] AboutPage y ContactPage
- [ ] JewelryBuilderPage con calculadora
- [ ] CustomJewelryPage
- [ ] Backend: modelos y rutas API
- [ ] Conexión frontend ↔ backend
- [ ] Integración de pagos con Stripe
- [ ] Deploy completo en producción

---

## 👨‍💻 Autor

**Guissella Pérez** — Desarrollador Fullstack
- GitHub: [@guiss26](https://github.com/guiss26)
- LinkedIn: [linkedin.com/in/guissella-pérez](https://www.linkedin.com/in/guissella-p%C3%A9rez/)

---

## 📄 Licencia

Este proyecto es de uso privado. Desarrollado para el negocio **Alas de Colibrí**.