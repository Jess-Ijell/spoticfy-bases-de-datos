const conn = require("../db");

const getCanciones = (_, res) => {
    connection.query("SELECT * FROM canciones", (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);
    });
};

const getCancion = (req, res) => {
    connection.query("SELECT * FROM albums WHERE id = ", [parseInt(req.params.id)], (err, results) => {
        if (err) return console.error(err.message);
        if(results.length === 0) return res.status(404).json({msg: "User not found"});
        res.json(results[0]);
    });
};

const createCancion = (req, res) => {
    const rep = 0;
    connection.query("INSERT INTO albumes (nombre, album, duracion), VALUES (?, ?, ?)", [req.body.nombre, req.body.album, rep], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            id: results.insertId,
            msg: "cancion agegada",
        });
    });
};

const updateCancion = (req, res) => {
    connection.query("UPDATE cancion WHERE nombre = ? AND id = ? AND duracion = ?", [req.body.nombre, req.body.id, parseInt(req.body.duracion)], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results)
    }); 
};

const deleteCancion = (req, res) => {
    connection.query("DELETE FROM albums WHERE nombre = ?", [req.body.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json(results);    
    });
};

const reproducirCancion = (req, res) => {
    connection.query("UPDATE canciones SET deracion = duracion + 1 WHERE nombre = ?", [req.params.nombre], (err, reps) => {
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
