import express from 'express';
const gameroutes = express.Router()

// na camada de routes é armazenados os endpoints (urls) da api

//endpoint para listar todos os games
gameroutes.get("/games", gamescontroller.getALLgames)

export default gameroutes;