const express = require("express");
const router = express.Router();
const UsuarioCtlr = require("../controllers/usuario.controller");

router.get("/", UsuarioCtlr.obtenerUsuario);

module.exports = router;