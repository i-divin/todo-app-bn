import{Router} from 'express';
import { protect } from '../../middleware/auth.js';
import { createTask, getAllTasks } from '../../controllers/tasks.controllers.js';



const routes = new Router();

routes.post('/create',protect,createTask)
routes.get('/',protect,getAllTasks)

export default routes;