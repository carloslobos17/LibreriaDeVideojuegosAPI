const mongoose = require("mongoose");


const UsuariosSchema = new mongoose.Schema({
    nombre_completo:{type: String},
    email:{type:String},
    fecha_registro:{type: Date},
    biblioteca:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Videojuegos",
        required: true
    }],
    },
    {collection:'Usuarios'}
);
module.exports = mongoose.model("Usuarios", UsuariosSchema);
