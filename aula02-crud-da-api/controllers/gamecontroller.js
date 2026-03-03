
// importando os services
import gameservice from "../services/gameservice.js";

// funcao para tratar a requisiczo de listar jogos
const getALLgames = async (req, res) => {
    try {
        const games = await gameservice.getALL()
        res.status(200).json({ game : games})
        // cod. 200 (ok): requisacao feota com sucesso
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'erro interno do servidor. nao foi possivel listar os jogos'})
    }
}

//funcao para tratar a requisicao de cadastrar um jogo
const createGame = async(req, res) =>{
    try {
        //desestruturacao
        //const title = req.body.title
        //const platform req.body.platform
        const {title, platform, year, price} = req.body
        //passando os dados para o service
        await gameservice.create(title, platform, year, price)
        res.status(201).json({message: 'o jogo foi cadastrado com sucesso'})
        //cod.201 - create - um novo recurso foi criado no servidor
    }catch(error){
        console.log(error)
        res.status(500).json({error: 'error interno do servidor. nao foi possivel cadastrar o jogo'})
    }
}
export default { getALLgames, createGame}