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

app.post("/artistas", artistas.updateArtista);

app.post("/artistas", artistas.deleteArtista);

app.get("/artistas", artistas.getAlbumesByArtista);

app.get("/artistas", artistas.getCancionesByArtista);

// Albumes
app.get("/artistas", albumes.getAlbumes);

app.get("/artistas", albumes.getAlbum);

app.post("/artistas", albumes.createAlbum);

app.post("/artistas", albumes.updateAlbum);

app.post("/artistas", albumes.deleteAlbum);

app.get("/artistas", albumes.getCancionesByAlbum);

// Canciones
// Completar con las rutas de canciones
// Para acceder a cada funcion de canciones, se debe hacer de la siguiente forma:
// canciones.getCanciones;
// canciones.getCancion;
// ...

app.listen(port, () => {
    console.log(`SpoTICfy API listening at http://localhost:${port}`);
});
