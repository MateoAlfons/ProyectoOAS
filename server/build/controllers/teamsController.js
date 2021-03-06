"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class TeamsController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM equipos', function (err, equipos, fields) {
                if (err)
                    throw err;
                res.json(equipos);
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO equipos set ?', [req.body]);
            res.json({ message: 'equipo creado' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM equipos WHERE id = ?', [id]);
            res.json('equipo Eliminado ' + req.params.id);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE equipos set ? WHERE id = ?', [req.body, id]);
            res.json({ message: 'tabla actualizada' });
        });
    }
    rank(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('SELECT * FROM equipos ORDER BY puntos DESC', function (err, equipos, fields) {
                if (err)
                    throw err;
                res.json(equipos);
            });
        });
    }
}
const teamsController = new TeamsController();
exports.default = teamsController;
