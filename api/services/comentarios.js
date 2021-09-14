const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1) {
    const offset = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        'SELECT * FROM comentarios OFFSET $1 LIMIT $2', 
        [offset, config.listPerPage]
    );
    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {
        data,
        meta
    }
}

async function create(comentarios) {
    const result = await db.query(
        'INSERT INTO comentarios(name, email, message) VALUES ($1, $2, $3) RETURNING *',
        [comentarios.name, comentarios.email, comentarios.message]
    );
    let message = 'Error in creating comentario';

    if (result.length) {
        message = 'Comentario created successfully';
    }

    return {message};
}

module.exports = {
    getMultiple,
    create
}