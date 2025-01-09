import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';
import taxiStandRoutes from './routes/taxiStandRoutes.js';
import setupSwagger from './config/swagger.js';
dotenv.config();

connectToDB();

const app = express();
app.use(express.json());

app.use('/api', taxiStandRoutes);

setupSwagger(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});