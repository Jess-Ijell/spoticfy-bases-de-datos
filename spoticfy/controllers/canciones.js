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
    connection.query("INSERT INTO albumes (nombre, album, duracion), VALUES (?, ?)", [req.body.nombre, req.body.album, parseInt(req.body.duracion)], (err, results) => {
        if (err) return console.error(err.message);
        res.json({
            id: results.insertId,
            msg: "cancion agegada",
        });
    });
    // (Reproducciones se inicializa en 0) ???
};

const updateCancion = (req, res) => {
    // Completar con la consulta que actualiza una canción
    // Recordar que los parámetros de una consulta PUT se encuentran en req.body
    // Deberían recibir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre de la canción",
            "album": "Id del album",
            "duracion": "Duración de la canción",
        }
    */
    // (Reproducciones no se puede modificar con esta consulta)
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
