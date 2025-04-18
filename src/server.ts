import express from "express";
import colors from 'colors'
import router from "./router";
import db from "./config/db";

// Conectar a BD
export async function connetDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.bgGreen.white.bold('conexion exitosa'))
    } catch (error) {
        // console.log(error)
        console.log(colors.bgRed.white('Hubo un error al conectar a la db'))
    }
}
connetDB()
// Instancia de Express
const server = express()
// Leer datos de forms
server.use(express.json())

server.use('/api/products', router)

// server.get('/api', (req, res) => {
//     res.json({msg: 'Desde API'})
// })

export default server