import { Router } from 'express';
import { register, login, getMe } from '../controllers/authController.js';
import { validate, registerSchema, loginSchema } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';
import userUpdate from '../controllers/usercontroller.js';
import userDelete from '../controllers/user.deleteControllers.js';

const router = Router();

router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login);
router.put('/:id',userUpdate);
router.delete('/:id',userDelete);
router.get('/me', protect, getMe);

export default router;
