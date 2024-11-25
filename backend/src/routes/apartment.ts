import { Router } from 'express';
import apartmentsController from '../controllers/apartment';

const router = Router();

router.get('/', apartmentsController.getApartments);
router.get('/:id', apartmentsController.getApartment);
router.post('/', apartmentsController.createApartment);

export default router;
