const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// async function getMultiple(page = 1) {
//     const offset = helper.getOffset(page, config.listPerPage);
//     const rows = await db.query(
//         'SELECT * FROM paises OFFSET $1 LIMIT $2', 
//         [offset, config.listPerPage]
//     );
//     const data = helper.emptyOrRows(rows);
//     const meta = {page};
    
//     return {
//         data,
//         meta
//     }
// }

// async function getMultiple() {
//     const data = await db.query('SELECT * FROM paises')

//     return data;
// }

async function getCountries() {
    const dataPaises = await db.query('SELECT * FROM paises');
    const dataPartidos = await db.query('SELECT * FROM partidos')

    return {
        dataPaises,
        dataPartidos
    }
}

async function create(paises) {
    const result = await db.query(
        'INSERT INTO paises(id, name, grupoid, escudo) VALUES ($1, $2) RETURNING *',
        [paises.id, paises.name, paises.grupoid, paises.escudo]
    );
    let message = 'Error in creating pais';

    if (result.length) {
        message = 'Pais created successfully';
    }

    return {message};
}

module.exports = {
    //getMultiple,
    getCountries,
    create
}