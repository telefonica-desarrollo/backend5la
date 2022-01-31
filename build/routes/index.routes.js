"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controller_1 = require("../controller/index.controller");
const usuario_controller_1 = require("../controller/usuario.controller");
class IndexRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post("/registros", index_controller_1.indexController.obtenerRegistros);
        this.router.post("/registros/nuevos", index_controller_1.indexController.obtenerRegistrosNuevos);
        this.router.post("/login", usuario_controller_1.usuarioController.validarUsuario);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
