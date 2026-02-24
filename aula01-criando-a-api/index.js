import express from "express";
//importando o mongoose
import mongoose from 'mongoose';
// importando o model
import Game from "./models/games.js"

const app  = express();
 
// Configurações do express
app.use(express.json()) // permite o uso de json na aplicão

//iniciando a conexao com o banco de dados mongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games")
 
app.get("/", (req, res) =>{
    const games = [
        {
            title:"game 1",
            year:"2020",
            platform:"pc",
            price:20
        },
         {
            title:"game 2",
            year:"2024",
            platform:"xbox",
            price:30
        },
    
    ];
    res.status(200).json(games)
})
// Rodando a api na port 4000
const port = 4000;
app.listen(port, (error) =>{
    if (error){
        console.log(error)
    }else {
        console.log(`API rodando em http://localhost:${port}`)
    }
})