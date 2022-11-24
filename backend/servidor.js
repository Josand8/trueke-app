const express = require('express')
const mongoose = require('mongoose')
const app1 = express()
const port = 5000

const bodyParser = require('body-parser')
app1.use(bodyParser.json())
app1.use(bodyParser.urlencoded({extended:false}))

mongoose
    //.connect("mongodb://localhost:27017/admin")
    .connect("mongodb+srv://trueke:12345@truekeapp.t2vinyp.mongodb.net/truekeapp")
    .then(console.log("Conexion con base de datos"))

//Cors
const cors = require('cors')
app1.use(cors())

let Esquema = require('./Modelos/bd_articulos')

const rutas = require('./router/rutas')
app1.use('/servicios',rutas)
const rutas_usr = require('./router/rutas_usr')
app1.use('/usuarios',rutas_usr)

app1.listen(port,()=>console.log('Servidor...'))