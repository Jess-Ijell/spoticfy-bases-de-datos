const connection = require("../db");

const getCanciones = (_, res) => {
    connection.query("SELECT * FROM canciones", (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

const getCancion = (req, res) => {
    connection.query("SELECT canciones.id, canciones.nombre, canciones.duracion, canciones.reproducciones, artistas.nombre AS nombre_artista, albumes.nombre AS nombre_album FROM canciones INNER JOIN albumes ON canciones.album = albumes.id INNER JOIN artistas ON artistas.id = albumes.artista WHERE canciones.id = ?", [parseInt(req.params.id)], (err, results) => {
        if (err) return console.error(err.message);
        if(results.length === 0) return res.status(404).json({msg: "Song not found"});
        res.json(results[0]);
    });
};

const createCancion = (req, res) => {
    const rep = 0;
    connection.query("INSERT INTO canciones (canciones.nombre, canciones.album, canciones.duracion, canciones.reproducciones) VALUES (?, ?, ?, 0)", [req.body.nombre, req.body.album, req.body.duracion, rep], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            id: results.insertId,
            msg: "cancion agegada",
        });
    });
};

const updateCancion = (req, res) => {
    connection.query("UPDATE canciones SET nombre = ?, album = ?, duracion = ? WHERE id = ?", [req.body.nombre, req.body.album, parseInt(req.body.duracion), req.params.id], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results)
    }); 
};

const deleteCancion = (req, res) => {
    connection.query("DELETE FROM canciones WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);    
    });
};

const reproducirCancion = (req, res) => {
    connection.query("UPDATE canciones SET reproducciones = reproducciones + 1 WHERE id = ?", [req.params.id], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });     
};

module.exports = {
    getCanciones,
    getCancion,
    createCancion,
    updateCancion,
    deleteCancion,
    reproducirCancion,
};
