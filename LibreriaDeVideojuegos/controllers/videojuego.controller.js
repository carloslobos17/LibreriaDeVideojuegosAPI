const Videojuego = require("../models/Videojuego")

exports.obtenerVideojuego = async (req, res) => {
    try{
        const {excluirdesarrollador, proyectar, lanzamiento} = req.query;
        const filtro = {};
        if (excluirdesarrollador) {
           filtro.desarrollador = { $ne: excluirdesarrollador };
        }

        let query = Videojuego.find(filtro);

        if (proyectar) {
            query.select("titulo fecha_lanzamiento desarrollador");
        }
        if (lanzamiento) {
            query.sort({ fecha_lanzamiento: 1 });
        }

        const Videojuegos = await query;

        res.json(Videojuegos);
    }catch (error) {
        res.status(500).json({error: error.message});
    }
};