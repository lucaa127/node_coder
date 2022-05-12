const express = require('express')
const handlebars = require('express-handlebars')
const Producto = require('./productos.js')
const app = express()

const claseProducto = new Producto()


//app.use(express.json())
app.use(express.urlencoded({ extended:true }))

//******************* */

app.engine('handlebars', handlebars.engine())
app.set('views', './views')


app.set('view engine', 'handlebars')


app.get('/', (req, res) => {

        res.render('form')
        
    })

app.get('/productos', (req, res) => {
    const data = claseProducto.listarProductos()
    console.log(data)
    let statusL

    if (data.length > 0){
        statusL = true
     }

        res.render('productos', {datos: data, statusList: statusL })
    
    })

app.post('/productos', (req, res) => {

const prodFormData = req.body
    claseProducto.agregarProducto(prodFormData)
    res.redirect('/');
} )




app.listen(8080)