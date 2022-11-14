const conn = require("../db");

const getAlbumes = (_, res) => {    
    connection.query("SELECT * FROM artistas", (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

const getAlbum = (req, res) => {
    connection.query("SELECT * FROM albums WHERE id = ", [parseInt(req.params.id)], (err, results) => {
        if (err) return console.error(err.message);
        if(results.length === 0) return res.status(404).json({msg: "User not found"});
        res.json(results[0]);
    });
};

const createAlbum = (req, res) => {
    connection.query("INSERT INTO albumes (nombre, artista), VALUES (?, ?)", [req.body.nombre, parseInt(req.body.artista)], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            id: results.insertId,
            msg: "Album agregado",
        });
    });
};

const updateAlbum = (req, res) => {
    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
};

const deleteAlbum = (req, res) => {
    connection.query("DELETE FROM albums WHERE nombre = ?", [req.body.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            //REVISAR
            id: results.removeId,
            msg: "Album eliminado",
        });
    });
};

const getCancionesByAlbum = (req, res) => {
    connection.query("SELECT * FROM albums WHERE id = ", [parseInt(req.params.id)], (err, results) => {
        if (err) return console.error(err.message);
        if(results.length === 0) return res.status(404).json({msg: "User not found"});
        res.json(results[0]);
    });
};

module.exports = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};
