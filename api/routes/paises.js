const express = require('express');
const router = express.Router();
const paises = require('../services/paises');

/* GET quotes listing. */
router.get('/', async function(req, res, next) {
    try {
        res.json(await paises.getCountries(req.query.page));
    } catch (err) {
        console.error(`Error while getting paises `, err.message);
        next(err);
    }
});

/* POST quotes */
router.post('/', async function(req, res, next) {
    try {
        res.json(await paises.create(req.body));
    } catch (err) {
        console.error(`Error while posting paises `, err.message);
        next(err);
    }
});

module.exports = router;