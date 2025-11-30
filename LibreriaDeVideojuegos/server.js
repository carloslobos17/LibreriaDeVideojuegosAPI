const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const conectarBD = require("./config/database");

dotenv.config();
conectarBD();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/usuarios", require("./routes/usuarios.routes"))
app.use("/api/videojuegos", require("./routes/videojuegos.routes"))

app.listen(3000, () => {
    console.log("servidor en http://localhost:3000")
})