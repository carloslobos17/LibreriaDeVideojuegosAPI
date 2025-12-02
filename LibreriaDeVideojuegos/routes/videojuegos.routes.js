const express = require("express");
const router = express.Router();
const VideojuegoCtlr = require("../controllers/videojuego.controller");

router.get("/", VideojuegoCtlr.obtenerVideojuego);
router.get("/contarPorDesarrollador", VideojuegoCtlr.contarPorDesarrollador);
router.get("/obtenerDetalles/:id", VideojuegoCtlr.obtenerDetalles);
router.get("/fecha", VideojuegoCtlr.obtenerPorFecha);

module.exports = router;