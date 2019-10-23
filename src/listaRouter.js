const express = require('express')
const router = express.Router()
const controller = require('../listaControle')

router.get('/', listaControle.get)
router.get ('/', listaControle.getId)
router.get('/',listaControle.getDescricao)
router.get ("/", listaControle.getConclusao)

module.exports = router