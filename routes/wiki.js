const express = require('express');
const wiki = express.Router();
const models = require('../models');


wiki.get('/', (req, res, next) => {
    models.Page.findAll().then((result) => res.json(result))
});
wiki.post('/', (req, res, next) => {

})
wiki.get('/add', (req, res, next) => {

})

module.exports = wiki;

