import{Router} from 'express';
import { protect } from '../../middleware/auth.js';
import { createTask } from '../../controllers/tasks.controllers.js';



const routes = new Router();

routes.post('/create',protect,createTask)

export default routes;