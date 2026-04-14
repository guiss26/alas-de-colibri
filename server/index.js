import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Ruta de prueba para verificar que el servidor funciona correctamente
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', mensaje: 'Servidor funcionando correctamente'})
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})