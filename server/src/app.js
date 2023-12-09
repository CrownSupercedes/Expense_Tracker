#!/usr/bin/env node

const express = require("express");
const dbConnect = require("./config/dbConnect");
const registerUser = require("./controllers/users/users_controller");
const app = express();
const userRoute = require('./routes/users/usersRoute');

//dbConnect
dbConnect();

//middlewares
app.use(express.json());

//routes
app.use('/', userRoute);
module.exports = app;
