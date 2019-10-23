const app = require('./src/app')
const port = 200

//toda vez que acessa na url /, irá chamar essa função
app.listen(port, function(){
    console.log(`App está rodando na porta ${port}`)
})