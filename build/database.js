"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const con = mysql_1.default.createConnection({
    host: "10.140.110.15",
    user: "temm",
    password: "t3kn312021",
    database: "proyecto5la",
    port: 3306,
});
con.connect((err) => {
    try {
        if (err)
            throw err;
        console.log("Base de datos conectada");
    }
    catch (error) {
        console.log("Error de conexion");
    }
});
exports.default = con;
