#!/usr/bin/env node

const express = require("express");
const dbConnect = require("./config/dbConnect");
const registerUser = require("./controllers/users/users_controller");
const app = express();

//dbConnect
dbConnect();

//routes
app.post("/register", registerUser);
module.exports = app;
