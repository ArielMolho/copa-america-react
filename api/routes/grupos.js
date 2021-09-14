const express = require('express');
const router = express.Router();
const grupos = require('../services/grupos');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
        // res.json(await grupos.getMultiple(req.query.page));
        res.json(await grupos.getZones(req.query.page));
    } catch (err) {
        console.error(`Error while getting grupos `, err.message);
        next(err);
    }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
    try {
        res.json(await grupos.create(req.body));
    } catch (err) {
        console.error(`Error while posting grupos `, err.message);
        next(err);
    }
});

module.exports = router;