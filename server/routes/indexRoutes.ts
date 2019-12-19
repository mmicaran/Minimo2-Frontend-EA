import { Request, Response, Router } from 'express';

class IndexRoutes {

    router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get('/', (req, res) => res.send('API: /'));
    }
}

const indexrRoutes = new IndexRoutes();
indexrRoutes.routes();

export default indexrRoutes.router;