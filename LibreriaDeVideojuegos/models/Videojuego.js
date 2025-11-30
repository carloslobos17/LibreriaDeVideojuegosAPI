const mongoose = require("mongoose");


const VideojuegosSchema = new mongoose.Schema({
    titulo:{type: String},
    fecha_lanzamiento:{type: Date},
    desarrollador:[String],
    editora:[String],
    productores:[String],
    generos:[String],
    prestamo_familiar:{type:String},
    idiomas:[String],
    precio:{type:Number},
    duracion:{type:Number},
    plataformas:[String]
    },
    {collection:'Videojuegos'}
);
module.exports = mongoose.model("Videojuegos", VideojuegosSchema);
