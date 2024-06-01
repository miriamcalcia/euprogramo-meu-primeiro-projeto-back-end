const express = require("express") // aqui estou iniciando o express
//aqui estou configurando a primeira parte da  de rota
const router = express.Router()
const { v4: uuidv4 } = require('uuid') // esta biblioteca gera id's automaticamente


const app = express() // aqui estou iniciando o app
app.use(express.json()) // lê o corpo das requisições HTTP que têm o conteúdo no formato JSON e converte esse conteúdo em um objeto JavaScript 'request.body'
const porta = 3333 // aqui estou criando a porta

//aqui estou criando a lista inicial de mulheres
const ListaDeMulheres = [

    {
      id:'1',
      nome: 'Simara Conceição',
      imagem: 'https://bit.ly/3LJIyOF',
      minibio: 'Desenvolvedora e instrutora',
    },
   
    {
      id:'2',
      nome: 'Iana Chan',
      imagem: 'https://bit.ly/3JCXBqP',
      minibio: 'CEO & Founder da PrograMaria',
    },
   
    {
      ide:'3',
      nome: 'Luana Pimentel',
      imagem: 'https://bit.ly/3FKpFaz',
      minibio: 'Senior Staff Software Engineer',
    }
   
   ]

//GET
function mostraMulheres(request, response) {

 response.json(ListaDeMulheres)

}

//POST
function criaMulher(request, response){

  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

ListaDeMulheres.push(novaMulher) //pega nova mulher e coloca na ListaDeMulheres
Response.json(ListaDeMulheres) //resposta com a lista atualizada com uma nova mulher


}

//PORTA
function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

}

app.use(router.get('/mulheres', mostraMulheres))// configurei rota GET /mulheres
app.use(router.post('/mulheres', criaMulher))  // configurei rota POST /mulheres
app.listen(porta, mostraPorta) // servidor ouvindo a porta