import{Router} from 'express';
import { protect } from '../../middleware/auth.js';
import { createTask, getAllTasks } from '../../controllers/tasks.controllers.js';
import taskUpdate from '../../controllers/taskUpdateControllers.js';



const routes = new Router();

routes.post('/create',protect,createTask)
routes.get('/',protect,getAllTasks)
routes.put('/:id',taskUpdate)

export default routes;