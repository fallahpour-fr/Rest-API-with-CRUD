const express = require('express');
const app = express();
const usertRoute = require('./routes/users.rout');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', usertRoute);

module.exports = app;