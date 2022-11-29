const connection = require("../db");

const getArtistas = (_, res) => {
    connection.query("SELECT * FROM artistas", (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

const getArtista = (req, res) => {
    connection.query("SELECT * FROM artistas WHERE id = ?", [parseInt(req.params.id)], (err, results) => {
        if (err) return console.error(err.message);
        if(results.length === 0) return res.status(404).json({msg: "User not found"});
        res.json(results[0]);
    });
};

const createArtista = (req, res) => {
    connection.query("INSERT INTO artistas (nombre) VALUES (?)", [req.body.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            id: results.insertId,
            msg: "Artista agregado",
        });
    });
};

const updateArtista = (req, res) => {
    connection.query("UPDATE artistas SET nombre = ? WHERE id = ?", [req.body.nombre, parseInt(req.params.id)], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results)
    }); 
};

const deleteArtista = (req, res) => {
    connection.query("DELETE FROM artistas WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

const getAlbumesByArtista = (req, res) => {
    connection.query("SELECT * FROM albumes WHERE artista = ?", [req.params.id], (err, results) => {
        if (err) return console.error(err.message);
        res.send(results);
    });
};

const getCancionesByArtista = (req, res) => {
    connection.query("SELECT * FROM canciones LEFT JOIN albumes ON canciones.album = albumes.id WHERE albumes.artista = ?", [parseInt(req.params.id)], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

module.exports = {
    getArtistas,
    getArtista,
    createArtista,
    updateArtista,
    deleteArtista,
    getAlbumesByArtista,
    getCancionesByArtista,
};
