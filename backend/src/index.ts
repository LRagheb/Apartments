import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/db';
import cors from 'cors';
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

// routes
app.use('/api/apartments', apartmentRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
