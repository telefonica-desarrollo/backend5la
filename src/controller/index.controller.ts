import { Request, Response } from 'express';
import con from "../database" 

class IndexController{

    async obtenerRegistrosNuevos(req: Request, res:Response){
        const data: any = req.body
        const sql = "SELECT * FROM Registros WHERE STATUS=0 and ID_TIENDA = ?"
        await con.query(sql, [data.ID_TIENDA], (err, result) => {
            try {
                if(err) throw err
                res.json(result)
            } catch (error) {
                
            }
        })    
    }

    async obtenerRegistros(req: Request, res: Response){
        const data = req.body
        console.log(data);
        
        const sql = "SELECT R.* FROM Seguimiento S inner join Registros R on S.ID_REGISTRO = R.ID_REGISTRO and S.ID_USUARIO = ?"
        await con.query(sql, [data.ID_USUARIO], (err, result) => {
            try {
                if(err) throw err;
                res.json(result)
            } catch (error) {
                
            }
        })
    }

    async validarUsuario(req: Request, res: Response){
        const data: any= req.body;
        console.log(data);
        
        const sql = "Select * from Usuarios where USUSARIO = ? && PASSWORD = ?"
        await con.query(sql , [data.Usuario, data.Password] , (err, result) => {
            try {
                if(err) throw "Peticion no validaa";
                if(result.length > 0) res.json(result)
                else res.json(false)     

            } catch (error) {
                console.log(error);
            }
        })
    }

    async cambiarStatus(req: Request, res:Response){
        const data: any = req.body;
        console.log(data);
        
        const sql = "UPDATE Registros SET STATUS = ? WHERE ID_REGISTRO ? ?";
        await con.query(sql, [data.STATUS, data.ID_REGISTRO], (err, result)=> {
            try {
                if(err) throw err
                res.json(result)
            } catch (error) {
                
            }
        })
    }

    async modificarTienda(req: Request, res: Response){
        const data: any = req.body;
        console.log(data);
        
        const sql = `UPDATE Registros SET PRIMER_RESPUESTA= ?, COMENTARIOS= ?, CITA= ?, FECHA_CITA= ?,
        WHERE Id_Tienda=?;`
        
        await con.query(sql, [data.PRIMER_RESPUESTA, data.COMENTARIOS, data.CITA, data.FECHA_CITA], (err, result) => {
            try {
                if(err) throw err
                res.json(result)
            } catch (error) {
                console.log(error);
            }
        })
    }

} 

export const indexController = new IndexController();