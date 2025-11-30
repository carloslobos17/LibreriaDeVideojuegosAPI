const express = require("express");
const router = express.Router();
const VideojuegoCtlr = require("../controllers/videojuego.controller");

router.get("/", VideojuegoCtlr.obtenerVideojuego);

module.exports = router;