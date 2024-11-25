import dotenv from 'dotenv';
import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import connectDB from './config/db';
import apartmentRoutes from './routes/apartment';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

var corsOptions = {
  origin: ['http://localhost:3001']
};
app.use(cors(corsOptions))

// swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Apartments API',
      version: '1.0.0',
      description: 'API documentation for the Apartments App',
    },
  },
  apis: ['./src/routes/*.ts'],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routes
app.use('/api/apartments', apartmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger UI is available at http://localhost:${port}/api-docs`);
});
