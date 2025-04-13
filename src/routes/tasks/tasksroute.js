import{Router} from 'express';
import { protect } from '../../middleware/auth.js';
import { createTask, getAllTasks } from '../../controllers/tasks.controllers.js';
import taskUpdate from '../../controllers/taskUpdateControllers.js';
import taskDelete from '../../controllers/task.deleteController.js';



const routes = new Router();

routes.post('/create',protect,createTask)
routes.get('/',protect,getAllTasks)
routes.put('/:id',taskUpdate)
routes.delete('/:id',taskDelete)

export default routes;