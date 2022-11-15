const express = require("express");
const app = express();
const port = 3000;

const artistas = require("./controllers/artistas");
const albumes = require("./controllers/albumes");
const canciones = require("./controllers/canciones");

app.use(express.json());

app.get("/", (_, res) => {
    res.send("SpoTICfy API working!");
});

/* ------------------- Rutas ------------------- */

// Artistas
app.get("/artistas", artistas.getArtistas);

app.get("/artistas", artistas.getArtista);

app.post("/artistas", artistas.createArtista);

app.put("/artistas", artistas.updateArtista);

app.delete("/artistas", artistas.deleteArtista);

app.get("/artistas", artistas.getAlbumesByArtista);

app.get("/artistas", artistas.getCancionesByArtista);

// Albumes
app.get("/albumes", albumes.getAlbumes);

app.get("/albumes", albumes.getAlbum);

app.post("/albumes", albumes.createAlbum);

app.put("/albumes", albumes.updateAlbum);

app.delete("/albumes", albumes.deleteAlbum);

app.get("/albumes", albumes.getCancionesByAlbum);

// Canciones
app.get("/canciones", canciones.getCanciones);

app.get("/canciones", canciones.getCancion);

app.post("/canciones", canciones.createCancion);

app.post("/canciones", canciones.updateCancion);

app.delete("/canciones", canciones.deleteCancion);

app.put("/canciones", canciones.reproducirCancion);


app.listen(port, () => {
    console.log(`SpoTICfy API listening at http://localhost:${port}`);
});
