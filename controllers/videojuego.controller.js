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

exports.contarPorDesarrollador = async (req, res) => {
    try {
        const resultado = await Videojuego.aggregate([
            {
                $group: {
                    _id: "$desarrollador",
                    total: { $sum: 1 }
                }
            }
        ]);

        res.json(resultado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerDetalles = async (req, res) => {
    try {
        const { id } = req.params;

        const juego = await Videojuego.findById(id)
            .select("titulo duracion plataforma");

        if (!juego) {
            return res.status(404).json({ error: "Videojuego no encontrado" });
        }

        res.json(juego);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerPorFecha = async (req, res) => {
    try {
        const { tipo } = req.query;

        let orden = 1;
        if (tipo === "reciente") {
            orden = -1;
        }

        const juego = await Videojuego.find()
            .sort({ fecha_lanzamiento: orden })
            .limit(1)
            .select("titulo fecha_lanzamiento desarrollador plataforma duracion");

        res.json(juego);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buscarPorAnio = async (req, res) => {
    try {
        const { anio } = req.query;

        const juegos = await Videojuego.find({
            fecha_lanzamiento: { $gte: new Date(`${anio}-01-01`) }
        });

        res.json(juegos);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buscarPorProductorYDesarrollador = async (req, res) => {
    try {
        const { productor, desarrollador } = req.query;

        const juegos = await Videojuego.find({
            $and: [
                { productor: productor },
                { desarrollador: desarrollador }
            ]
        });

        res.json(juegos);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.buscarPorRangoAnios = async (req, res) => {
    try {
        const { inicio, fin } = req.query;

        const juegos = await Videojuego.find({
            fecha_lanzamiento: {
                $gte: new Date(`${inicio}-01-01`),
                $lte: new Date(`${fin}-12-31`)
            }
        });

        res.json(juegos);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.buscarPorGeneros = async (req, res) => {
    try {
        const { generos } = req.query;

        if (!generos || !Array.isArray(generos)) {
            return res.status(400).json({
                error: "Debes enviar un arreglo de géneros."
            });
        }

        const resultados = await Videojuego.find({
            generos: { $in: generos }
        });

        res.json(resultados);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
