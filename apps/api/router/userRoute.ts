import { Router } from 'express';
import { regisUser } from '../controller/regisController'; // Adjusted path
import { body } from 'express-validator';
import { loginUser } from './../controller/loginController';

const router = Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, User!' });
});

router.post(
  '/register',
  [
    body('firstName').notEmpty().withMessage('request firstName'),
    body('lastName').notEmpty().withMessage('request lastName'),
    body('email').notEmpty().withMessage('request email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('password must be field 6 karakter'),
  ],
  regisUser,
);

router.post ('/login',loginUser)

export default router;


