const express = require("express");
const dotenv = require("dotenv");
const db = require("./db");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Ruta de ejemplo para verificar conexión y obtener ofertas
app.get("/jobs", (req, res) => {
  const sql = "SELECT * FROM OfertaTrabajo";
  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error al obtener jobs:", err);
      res.status(500).json({ error: "Error en el servidor" });
    } else {
      res.json(results);
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}/jobs`);
});
