const Usuario = require("../models/Usuario")

exports.obtenerUsuario = async (req, res) => {
    try{
        const Usuarios = await Usuario.find()
        .populate('biblioteca');
        res.json(Usuarios);
        console.log(Usuarios)
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};

