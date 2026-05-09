"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 3000;
const users = [];
app.get('/users', (req, res) => {
    res.json(users);
});
app.post('/users', (req, res) => {
    const { name, password } = req.body;
    const newUser = { id: users.length + 1, name, password };
    users.push(newUser);
    res.status(201).json(newUser);
});
app.listen(3000, () => {
    console.log(`Server is running on port ${3000}`);
});
