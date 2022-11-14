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


//REVISAR
const createCancion = (req, res) => {
    rep = 0;
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
        res.json({
            //NO SÉ
        });
    }); 
    // Recordar que los parámetros de una consulta PUT se encuentran en req.body
};

const deleteCancion = (req, res) => {
    connection.query("DELETE FROM albums WHERE nombre = ?", [req.body.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            //REVISAR
            id: results.removeId,
            msg: "Album eliminado",
        });
    });
};

const reproducirCancion = (req, res) => {
    connection.query("UPDATE cancion WHERE nombre = ?", [req.params.nombre], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            id: results.insertId,
            msg: "cancion reproducida",
        });
    }); 
    // ACÁ DEBERÍA SEECCIONAR Y DESPUÉS UPDATEAR LAS REPRODUCCIONES???
    // Completar con la consulta que aumenta las reproducciones de una canción
    // En este caso es una consulta PUT, pero no recibe ningún parámetro en el body, solo en los params
};

module.exports = {
    getCanciones,
    getCancion,
    createCancion,
    updateCancion,
    deleteCancion,
    reproducirCancion,
};
