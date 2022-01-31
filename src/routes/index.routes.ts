import {Router} from 'express';
import { indexController } from '../controller/index.controller';
import {usuarioController} from "../controller/usuario.controller"


class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){  
        this.router.post("/registros", indexController.obtenerRegistros)
        this.router.post("/registros/nuevos", indexController.obtenerRegistrosNuevos)
        this.router.post("/login", usuarioController.validarUsuario)
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;