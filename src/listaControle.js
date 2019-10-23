const listaTarefa = require('../src/listaTarefa.json')

exports.getListaTarefa = (require, response) => {
    console.log(require.url)
    response.status(200).send(listaTarefa)
}


exports.getDescricao = (require, response) =>  {
console.log(descricao)
const ExibirTarefa = listaTarefa.descricao
const DescricaoTarefa = ExibirTarefa.filter(DescricaoTarefa => ExibirTarefa.descricao)

resp.status(200).send (descricao)
}

exports.getId = (require, response) =>  {
    console.log(Id)
    const ExibirTarefa = listaTarefa.descricao
    const DescricaoTarefa = ExibirTarefa.filter(DescricaoTarefa => ExibirTarefa.descricao)
    
    resp.status(200).send (descricao)
    }

    exports.getId = (req, resp) => {
        const id = req.params.id
        const EncontrarpId = listaTarefa.find(id => listaTarefa.id == id)}