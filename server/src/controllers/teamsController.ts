import{Request, Response} from 'express';

import pool from '../database';

class TeamsController{
    
    public async list (req: Request, res: Response){
        await pool.query('SELECT * FROM equipos', function(err, equipos, fields) {
            if (err) throw err;
            res.json(equipos);
        });
    }

    public async create (req: Request, res: Response){
        //console.log(req.body);
        await pool.query('INSERT INTO equipos set ?', [req.body]);
        res.json({message:'equipo creado'} ); 
    }

    public async delete (req: Request, res: Response){
        const { id } =req.params;
        await pool.query('DELETE FROM equipos WHERE id = ?', [id]);
        res.json('equipo Eliminado ' + req.params.id);
    }

    public async update (req: Request, res: Response){
        const {id} =req.params;
            await pool.query('UPDATE equipos set ? WHERE id = ?', [req.body,id]);
        res.json({message:'tabla actualizada'});
    }

    public async rank(req: Request, res: Response){
        await pool.query('SELECT * FROM equipos ORDER BY puntos DESC', function(err, equipos, fields) {
            if (err) throw err;
            res.json(equipos);
        });
    }  
}

const teamsController = new TeamsController();
export default teamsController;