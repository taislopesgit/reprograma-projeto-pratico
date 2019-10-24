const express = require('express')
const router = express.Router()
const controller = require('../controllers/tarefasController.js')

router.get('/', controller.get)
router.get('/:id',controller.getbyId)
router.get('/:id/descricao',controller.getTarefa)
router.get('/:concluido', controller.getConcluido)
router.get('/descricoes',controller.getDescricoes)



module.exports = router