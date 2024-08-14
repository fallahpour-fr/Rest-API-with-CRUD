const express = require('express');
const app = express();
const usertRoute = require('./routes/users.rout');
const http=require('http');

const port =3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', usertRoute);

const server=http.createServer(app);
server.listen(port);