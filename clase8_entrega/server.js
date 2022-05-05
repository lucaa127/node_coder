const express = require('express')
const { Router } = express
const Producto = require ('./productos.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use(express.static('public'))

const productoTest = new Producto()

const productosApi = new Router()

productosApi.get('/', (req,res)=>{
    res.json(productoTest.listarProductos())
})


productosApi.get('/:id', (req,res)=>{
    const { id } = req.params
    res.json(productoTest.productoPorId(id))
})

productosApi.delete('/:id', (req,res)=>{
    const { id } = req.params
    res.json(productoTest.borrarProductoPorId(id))
})

productosApi.put('/:id', (req,res)=>{
    const { id } = req.params
    const prod = req.body
    res.json(productoTest.actualizarProductoPorId(id,prod))
})

productosApi.post('/', (req,res)=>{
    const prod1 = req.body
    res.send(productoTest.agregarProducto(prod1))
})





app.use('/api/productos', productosApi)


const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log (`server listen PORT: ${server.address().port}`)
})
server.on("error", error => console.log (`Error ${error}`))