const express = require("express")

const app = express()

//rotas
const index = require('./routes/index')
const tarefas = require('./routes/tarefasRoute')

app.all('*',function(req, res, next) {
    console.log ('Exibimos a Lista de Tarefas dos Funcionários e as suas tarefas')
    next ()
})

app.use('/', index)
app.use('/tarefas', tarefas)


//exportando um modulo
module.exports = app

