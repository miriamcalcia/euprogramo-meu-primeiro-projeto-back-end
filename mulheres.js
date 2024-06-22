////mongodb+srv://miatech01:fadamonster#baly@clustermulheres.c02veku.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres

const express = require("express")                                                    
const router = express.Router()                                                       //aqui estou configurando a primeira parte da  de rota
const { v4: uuidv4 } = require('uuid') 

const conectaBancoDeDados = require ('./db')
conectaBancoDeDados()
                                           // esta biblioteca gera id's automaticamente
const app = express()                                                                 // aqui estou iniciando o app
exports.app = app
app.use(express.json())                                                               // lê o corpo das requisições HTTP que têm o conteúdo no formato JSON e converte esse conteúdo em um objeto JavaScript 'request.body'
const porta = 3333                                                                    // aqui estou criando a porta                     
exports.porta = porta




//aqui estou criando a lista inicial de mulheres
const listaDeMulheres = [

    {
      id:'1',
      nome: 'Simara Conceição',
      imagem: 'https://bit.ly/3LJIyOF',
      minibio: 'Desenvolvedora e instrutora'
    },
   
    {
      id:'2',
      nome: 'Iana Chan',
      imagem: 'https://bit.ly/3JCXBqP',
      minibio: 'CEO & Founder da PrograMaria'
    },
   
    {
      id:'3',
      nome: 'Luana Pimentel',
      imagem: 'https://bit.ly/3FKpFaz',
      minibio: 'Senior Staff Software Engineer'
    }
   
   ]

                                                                                        // GET

app.get('/mulheres', function mostraMulheres(request, response) {
 response.json(listaDeMulheres)
})

                                                                                        // POST    

app.post("/mulheres", function criaMulher(request, response){
  const novaMulher = {
    id: uuidv4(),
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio
  }

listaDeMulheres.push(novaMulher)                                                         // pega nova mulher e coloca na ListaDeMulheres
Response.json(listaDeMulheres)                                                           // resposta com a lista atualizada com uma nova mulher

})

                                                                                        //PATCH

app.patch('/mulheres/:id', function corrigeMulher(request, response) {
        
  function encontraMulher(mulher) {
 
    if (mulher.id === request.params.id) {
 
      return mulher
 
    }
 
  }
 
  const mulherEncontrada = listaDeMulheres.find(encontraMulher)

 
  if (request.body.nome) {
 
    mulherEncontrada.nome = request.body.nome
 
  }
 
 
  if (request.body.minibio) {
 
    mulherEncontrada.minibio = request.body.minibio
 
  }

 
  if (request.body.imagem) {
 
    mulherEncontrada.imagem = request.body.imagem
 
  }
 
  response.json(mulheres)
 
 })
 

 //DELETE

 function deletaMulher( request, response ) {
 
  function todasMenosEla(mulher) {
 
    if (mulher.id !== request.params.id) {
 
      return mulher
 
    }
 
  }
 
 
  const mulheresQueFicaram = listaDeMulheres.filter(todasMenosEla)
 

  response.json(mulheresQueFicaram)
 
 }
 
 app.use(router.delete('/mulheres/:id', deletaMulher)) 
 
 

app.listen(porta, function mostraPorta() {

    console.log("Servidor criado e rodando na porta ", porta)

})


