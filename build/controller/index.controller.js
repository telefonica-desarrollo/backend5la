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
exports.indexController = void 0;
const database_1 = __importDefault(require("../database"));
class IndexController {
    obtenerRegistrosNuevos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const sql = "SELECT * FROM Registros WHERE STATUS=0 and ID_TIENDA = ?";
            yield database_1.default.query(sql, [data.ID_TIENDA], (err, result) => {
                try {
                    if (err)
                        throw err;
                    res.json(result);
                }
                catch (error) {
                }
            });
        });
    }
    obtenerRegistros(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log(data);
            const sql = "SELECT R.* FROM Seguimiento S inner join Registros R on S.ID_REGISTRO = R.ID_REGISTRO and S.ID_USUARIO = ?";
            yield database_1.default.query(sql, [data.ID_USUARIO], (err, result) => {
                try {
                    if (err)
                        throw err;
                    res.json(result);
                }
                catch (error) {
                }
            });
        });
    }
    validarUsuario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log(data);
            const sql = "Select * from Usuarios where USUSARIO = ? && PASSWORD = ?";
            yield database_1.default.query(sql, [data.Usuario, data.Password], (err, result) => {
                try {
                    if (err)
                        throw "Peticion no validaa";
                    if (result.length > 0)
                        res.json(result);
                    else
                        res.json(false);
                }
                catch (error) {
                    console.log(error);
                }
            });
        });
    }
    cambiarStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log(data);
            const sql = "UPDATE Registros SET STATUS = ? WHERE ID_REGISTRO ? ?";
            yield database_1.default.query(sql, [data.STATUS, data.ID_REGISTRO], (err, result) => {
                try {
                    if (err)
                        throw err;
                    res.json(result);
                }
                catch (error) {
                }
            });
        });
    }
    modificarTienda(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            console.log(data);
            const sql = `UPDATE Registros SET PRIMER_RESPUESTA= ?, COMENTARIOS= ?, CITA= ?, FECHA_CITA= ?,
        WHERE Id_Tienda=?;`;
            yield database_1.default.query(sql, [data.PRIMER_RESPUESTA, data.COMENTARIOS, data.CITA, data.FECHA_CITA], (err, result) => {
                try {
                    if (err)
                        throw err;
                    res.json(result);
                }
                catch (error) {
                    console.log(error);
                }
            });
        });
    }
}
exports.indexController = new IndexController();
