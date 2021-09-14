const db = require('./db');
const helper = require('../helper');
const config = require('../config');

// async function getMultiple(page = 1) {
//     const offset = helper.getOffset(page, config.listPerPage);
//     const rows = await db.query(
//         'SELECT * FROM grupos OFFSET $1 LIMIT $2', 
//         [offset, config.listPerPage]
//     );
//     const data = helper.emptyOrRows(rows);
//     const meta = {page};

//     return {
//         data,
//         meta
//     }
// }

async function getZones() {
    const dataGrupos = await db.query('SELECT * FROM grupos');
    const dataPaises = await db.query('SELECT * FROM paises');

    return {
        dataGrupos,
        dataPaises
    }
}

async function create(grupos) {
    const result = await db.query(
        'INSERT INTO grupos(id, name) VALUES ($1, $2) RETURNING *',
        [grupos.id, grupos.name]
    );
    let message = 'Error in creating grupo';

    if (result.length) {
        message = 'Grupo created successfully';
    }

    return {message};
}

module.exports = {
    // getMultiple,
    getZones,
    create
}