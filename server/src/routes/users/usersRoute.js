#!/usr/bin/env node

const express = require('express');

const userRoute = express.Router();
const registerUser = require('../../controllers/users/users_controller');

userRoute.post('/register', registerUser);

module.exports = userRoute;
