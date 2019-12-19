"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', (req, res) => res.send('API: /api/students'));
    }
}
const indexrRoutes = new IndexRoutes();
indexrRoutes.routes();
exports.default = indexrRoutes.router;
