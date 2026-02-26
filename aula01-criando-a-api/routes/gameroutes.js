import express from 'express';
import gamecontroller from '../controllers/gamecontroller.js';
const gameroutes = express.Router()

// na camada de routes é armazenados os endpoints (urls) da api

//endpoint para listar todos os games
gameroutes.get("/games", gamecontroller.getALLgames)

export default gameroutes;