const express = require("express");
const router = express.Router();
const VideojuegoCtlr = require("../controllers/videojuego.controller");

router.get("/", VideojuegoCtlr.obtenerVideojuego);
router.get("/contarPorDesarrollador", VideojuegoCtlr.contarPorDesarrollador);
router.get("/obtenerDetalles/:id", VideojuegoCtlr.obtenerDetalles);
router.get("/fecha", VideojuegoCtlr.obtenerPorFecha);
router.get("/buscarPorAnio", VideojuegoCtlr.buscarPorAnio);
router.get("/buscarPorDesProd", VideojuegoCtlr.buscarPorProductorYDesarrollador);
router.get("/buscarPorRango", VideojuegoCtlr.buscarPorRangoAnios);
router.get("/buscarPorGeneros", VideojuegoCtlr.buscarPorGeneros);

module.exports = router;