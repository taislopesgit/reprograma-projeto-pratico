const tarefas = require('../model/tarefas.json')

exports.get = (require, response) => {
    console.log(require.url)
    response.status(200).send(tarefas)
}

exports.getbyId = (req, response) => {
    const id = req.params.id   

    response.status(200).send(tarefas.find(o => o.id == id))

}

exports.getTarefa = (req, response) => {
    const t = req.params.id
    const tarefa = tarefas.find(tarefa => tarefa.id == t)
    const descricao = tarefa.descricao
    response.status(200).send(descricao)

}

exports.getDescricoes = (req, response) => {
    const detalhe = []
    tarefas.map(o=>detalhe.push(o.descricao))
    response.status(200).send(detalhes)
}

exports.getConcluido = (req, response) => {
    const verificar = require.params.concluido
    const CheckTarefa = tarefas.filter(feito =>ListaDeTarefa.concluido == 'true')
    response.status(200).send(tarefas.find(tarefas=> tarefas.id == concluido))

}