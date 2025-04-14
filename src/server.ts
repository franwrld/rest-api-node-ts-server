import express from "express";
import colors from 'colors'
import router from "./router";
import db from "./config/db";

// Conectar a BD
async function connetDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgGreen.white.bold('conexion exitosa'))
    } catch (error) {
        // console.log(error)
        console.log(colors.bgRed.white('Hubo un error al conectar a la db'))
    }
}
connetDB()
const server = express()

server.use('/api/products', router)

export default server