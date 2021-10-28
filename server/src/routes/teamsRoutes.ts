import { Router } from "express";

import teamsController from '../controllers/teamsController'

class TeamsRoutes{
    public router: Router = Router();
        
    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', teamsController.list);
        this.router.post('/', teamsController.create);
        this.router.delete('/:id', teamsController.delete);
        this.router.put('/:id', teamsController.update);
        this.router.get('/order',teamsController.rank)
    }
}

const teamsRoutes = new TeamsRoutes();
export default teamsRoutes.router;