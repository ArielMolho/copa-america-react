const express = require('express');
const router = express.Router();
const comments = require('../services/comentarios');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await comments.getMultiple(req.query.page));
    } catch (err) {
        console.error(`Error while getting comments `, err.message);
        next(err);
    }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
    try {
        res.json(await comments.create(req.body));
    } catch (err) {
        console.error(`Error while posting comments `, err.message);
        next(err);
    }
});

module.exports = router;