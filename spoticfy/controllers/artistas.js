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
    // Completar con la consulta que actualiza un artista
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del artista"
        }
    */
};

const deleteArtista = (req, res) => {
    connection.query("DELETE FROM artistas WHERE nombre = ?", [req.body.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            //REVISAR
            id: results.removeId,
            msg: "Artista eliminado",
        });
    });
};


//REVISAR
const getAlbumesByArtista = (req, res) => {
    connection.query("SELECT Id FROM aristas WHERE nombre = ?", [req.params.nombre], (err, idart) => {
        if (err) return console.error(err.message);
        res.send(idart);
        connection.query("SELECT * FROM albumes WHERE artista = ?"), [parseInt(idart)], (err, results) => {
            if (err) return console.error(err.message);
            res.json(results);
        }
    });
};

const getCancionesByArtista = (req, res) => {
    // Completar con la consulta que devuelve las canciones de un artista
    // (tener en cuenta que las canciones están asociadas a un álbum, y los álbumes a un artista)
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
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
