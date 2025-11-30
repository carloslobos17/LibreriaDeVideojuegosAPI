const Videojuego = require("../models/Videojuego")

exports.obtenerVideojuego = async (req, res) => {
    try{
        const Videojuegos = await Videojuego.find();
        res.json(Videojuegos);
        console.log(Videojuegos)
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};

