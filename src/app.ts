import express from 'express';
import carRoute from './routes/carRoute';
import MotorcycleRoute from './routes/motorcycleRoute';

const app = express();

app.use(express.json());
app.use('/cars', carRoute);
app.use('/motorcycles ', MotorcycleRoute);

export default app;