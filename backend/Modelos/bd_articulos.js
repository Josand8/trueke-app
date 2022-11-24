const mongoose=require('mongoose')

let esquema=mongoose.Schema({
    nombre:String,
    descripcion:String,
    cantidad:Number,
    imagen:String,
    usuario:String,
    contacto:Number,
    cartaACambio:String
})

let Esquema=mongoose.model("datos",esquema)

module.exports=Esquema