const express = require("express")
//configuração de rota
const router = express.Router()



const app = express()

const PORTA = 3333



function mostraMulher(request, response) {

 response.json({

    nome: 'Simara Conceição',

    imagem: 'https://github.com/simaraconceicao.png',

    minibio: 'Desenvolvedora e instrutora'

 })

}


function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", PORTA)

}



app.use(router.get('/mulher', mostraMulher))

app.listen(PORTA, mostraPorta)