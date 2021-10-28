"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teamsController_1 = __importDefault(require("../controllers/teamsController"));
class TeamsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', teamsController_1.default.list);
        this.router.post('/', teamsController_1.default.create);
        this.router.delete('/:id', teamsController_1.default.delete);
        this.router.put('/:id', teamsController_1.default.update);
        this.router.get('/order', teamsController_1.default.rank);
    }
}
const teamsRoutes = new TeamsRoutes();
exports.default = teamsRoutes.router;
