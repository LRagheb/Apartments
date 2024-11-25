import { Router } from 'express';
import apartmentsController from '../controllers/apartment';

const router = Router();

/**
 * @swagger
 * /apartments:
 *   get:
 *     summary: Get all apartments
 *     tags: [Apartments]
 *     responses:
 *       200:
 *         description: A list of apartments with total count
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 apartments:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       address:
 *                         type: string
 *                       location:
 *                         type: string
 *                       city:
 *                         type: string
 *                       readyToMove:
 *                         type: boolean
 *                       price:
 *                         type: number
 *                       commission:
 *                         type: number
 *                       downPayment:
 *                         type: number
 *                       deliveryYear:
 *                         type: string
 *                         format: date
 *                       _id:
 *                         type: string
 *                 total:
 *                   type: number
 *       500:
 *         description: Internal Server Error
 */
router.get('/', apartmentsController.getApartments);

/**
 * @swagger
 * /apartments/{id}:
 *   get:
 *     summary: Get a single apartment by ID
 *     tags: [Apartments]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The apartment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The apartment was found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 address:
 *                   type: string
 *                 location:
 *                   type: string
 *                 city:
 *                   type: string
 *                 readyToMove:
 *                   type: boolean
 *                 price:
 *                   type: number
 *                 commission:
 *                   type: number
 *                 downPayment:
 *                   type: number
 *                 deliveryYear:
 *                   type: string
 *                   format: date
 *       404:
 *         description: Apartment not found
 *       500:
 *         description: Internal Server Error
 */
router.get('/:id', apartmentsController.getApartment);

/**
 * @swagger
 * /apartments:
 *   post:
 *     summary: Create a new apartment
 *     tags: [Apartments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               city:
 *                 type: string
 *               readyToMove:
 *                 type: boolean
 *               price:
 *                 type: number
 *               commission:
 *                 type: number
 *               downPayment:
 *                 type: number
 *               deliveryYear:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: The apartment was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 address:
 *                   type: string
 *                 location:
 *                   type: string
 *                 city:
 *                   type: string
 *                 readyToMove:
 *                   type: boolean
 *                 price:
 *                   type: number
 *                 commission:
 *                   type: number
 *                 downPayment:
 *                   type: number
 *                 deliveryYear:
 *                   type: string
 *                   format: date
 *       400:
 *         description: Validation Error
 *       500:
 *         description: Internal Server Error
 */
router.post('/', apartmentsController.createApartment);

export default router;
