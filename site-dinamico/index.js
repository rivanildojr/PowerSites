const express = require("express")
const app = express()

let i = 0;

app.get('/', (req, res) => {
    i++;
    res.send(`<h1>Olá PowerSites! ${i}</h1>`)
})

app.listen(3000, () => {
    console.log("Servidor rodando")
})