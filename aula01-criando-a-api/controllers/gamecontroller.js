
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
        res.status(500).json({error: 'erro interno do servidor'})
    }
}
export default { getALLgames}