const mongoose=require('mongoose')

let esquema=mongoose.Schema({
    nombre:String,
    correo:String,
    contrasena:String
})

let Esquema_usr = mongoose.model("usuarios",esquema)

module.exports = Esquema_usr