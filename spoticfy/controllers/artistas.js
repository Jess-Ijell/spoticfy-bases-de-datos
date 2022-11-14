const conn = require("../db");

const getArtistas = (_, res) => {
    connection.query("SELECT * FROM artistas", (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

const getArtista = (req, res) => {
    connection.query("SELECT * FROM artistas WHERE id = ? AND nombre = ?", [parseInt(req.params.id), req.params.nombre], (err, results) => {
        if (err) return console.error(err.message);
        if(results.length === 0) return res.status(404).json({msg: "User not found"});
        res.json(results[0]);
    });
};

const createArtista = (req, res) => {
    connection.query("INSERT INTO artistas (nombre), VALUES (?)", [req.body.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            id: results.insertId,
            msg: "Artista agregado",
        });
    });
};

const updateArtista = (req, res) => {
    connection.query("UPDATE cancion WHERE id = ?", [req.params.i], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results)
    }); 
};

const deleteArtista = (req, res) => {
    connection.query("DELETE FROM artistas WHERE nombre = ?", [req.body.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

const getAlbumesByArtista = (req, res) => {
    const idart

    connection.query("SELECT id FROM aristas WHERE nombre = ?", [req.params.nombre], (err, idart) => {
        if (err) return console.error(err.message);
        res.send(idart);
    });

    connection.query("SELECT * FROM albumes WHERE artista = ?"), [parseInt(idart)], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    }
};

const getCancionesByArtista = (req, res) => {
    const idart;
    const idalbum;
    
    connection.query("SELECT id FROM aristas WHERE nombre = ?", [req.params.nombre], (err, idart) => {
        if (err) return console.error(err.message);
        res.send(idart);
        });

        connection.query("SELECT id FROM albumes WHERE artista = ?", [parseInt(idart)], (err, idalbum) => {
            if (err) return console.error(err.message);
            res.json(idalbum);
        });

        connection.query("SELECT * FROM canciones WHERE album = ?", [parseInt(idalbum)], (err, results) => {
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
