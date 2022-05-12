const express = require('express')
const PORT = 8080
const app = express()


const Contenedor = require('./main.js')


let file = new Contenedor("file.txt")
let readFile = file.getAll();


const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

app.get('/', (req, res) => {
    res.send('<h1>Entrega clase 6</h1>')
})


app.get('/productos', (req, res) => {
    res.send(readFile)
})

app.get('/productoRandom', (req, res) => {
   
    let randomId = (Math.floor(Math.random() * readFile.length)+ 1)  //arrLenght * Math.random()

    let randomProduct = file.getById(randomId);
    
    res.send({randomProduct})
})