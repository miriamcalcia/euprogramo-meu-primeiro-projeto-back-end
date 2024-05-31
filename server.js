const express = require ('express')

const app = express()
const porta = 3333


 // esta função mostra a porta que está rodando o servidor
 function mostraPorta(){
    console.log("servidor criado e rodando na porta", porta)
 }
 // iniciando servidor
 app.listen(porta, mostraPorta)