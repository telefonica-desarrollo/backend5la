import {Router} from 'express';
import { indexController } from '../controller/index.controller';


class IndexRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(){  
        this.router.post("/registros/nuevos", indexController.obtenerRegistrosNuevos)
        this.router.post("/registros", indexController.obtenerRegistros)

        this.router.post("/registro/iniciar/seguimiento", indexController.iniciarSeguimiento)
        this.router.post("/registro/seguimiento/status", indexController.cambiarStatus)
        this.router.post("/registro/seguimiento/informacion", indexController.modificarRegistro)

        this.router.post("/login", indexController.validarUsuario)
        this.router.post("/tienda", indexController.informacionTienda)
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;