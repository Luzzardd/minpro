import { Router } from 'express';
import { regisUser } from '../controller/regisController'; // Adjusted path
import { body } from 'express-validator';
import { loginUser } from './../controller/loginController';
import createEvent from '../controller/eventController';
const router = Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, User!' });
});
///register
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
//login
router.post('/login', loginUser);
//my ticket
router.post(
  '/event',
  [
    body('name').notEmpty().withMessage('Request name'),
    body('price').isInt().withMessage('Request price must be a number'),
    body('date').isISO8601().withMessage('Request date must be in ISO8601 format'),
    body('location').notEmpty().withMessage('Request location'),
    body('description').notEmpty().withMessage('Request description'),
    body('image').notEmpty().withMessage('Request image'),
  ],
  createEvent
);

//create event

export default router;
