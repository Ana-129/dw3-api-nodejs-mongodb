//importando o model
import game from "../models/games.js"

class gameservice {
    //metodo (servicos) para buscar todos os registros no banco
    // funcao asincronas sao nao bloqueantes
    async getALL() {
        // try trata  o sucesso
        try {
            //.find() -> é metodo do mongoose para buscar registros no banco
            const games = await game.find();
            return games;

        //catch trata falha    
        } catch(error) {
            console.log(error)
        }
    }
}
//exportando a classe
export default new gameservice()