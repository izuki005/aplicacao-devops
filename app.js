const express = require('express')
const app = express()
const PORTA = 3000


//cria uma rota na raiz do servidor que envia o arquivo index.html como resposta quando
// alguém acessa essa rota no navegador.
app.get('/', (req, res) => {
    res.sendFile('src/views/index.html', {root: __dirname})
})

data = { 'integrates':[
    {'front': 'Kawan Gabriel'},
    {'back': 'Matheus Falcão'}
]}

app.get('/integrantes', (req, res) => {
    res.json(data)
})


app.listen(PORTA, () => {
    console.log(`Seu servidor está rodando na porta 3000 em:\nhttp://localhost:${PORTA}`)
})