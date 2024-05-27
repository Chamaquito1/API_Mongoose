import express from 'express';
import { configDotenv } from 'dotenv';
import connectDB from './db.js';
import ArticleRouter from './routes/ArticleRoute.js';

const app = express();

app.use(express.json());

configDotenv();

const PORT = process.env.PORT || 3000;

app.use("/api", ArticleRouter);

connectDB();

app.get('/', (req, res) => {
    res.send({ 'Hello World': 'Welcome to the Node.js World!' });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});