import express from 'express';
import {pool} from './db.js';
import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';

import {PORT} from './config.js';
const app = express();

app.use(express.json());

app.use('/api',userRoutes);
app.use('/api',productRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: "Endpoint not found"
    })
})

export default app;