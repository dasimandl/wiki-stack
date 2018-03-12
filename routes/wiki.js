const express = require('express');
const wiki = express.Router();
const models = require('../models');
const {Page, User} = models;

wiki.get('/', (req, res, next) => {
    res.redirect('/');
});
wiki.post('/', (req, res, next) => {
    // console.log(req.body);
    const {title,content,status}=req.body;
    // console.log(title,content,status);
    const page = Page.build({
        title,
        content,
        status,
    });
    page.save()
    .then(res.json(page));
    // res.json(req.body);
})

wiki.get('/add', (req, res, next) => {
    res.render('addpage.html');
})

module.exports = wiki;

