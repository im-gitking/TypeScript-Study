"use strict";
// import express from 'express';
// const router = express.Router();
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
// module.exports = router;
exports.default = router;
