import express from 'express';
import cors from 'cors';
import router from './api/router.mjs';

const app = express();

app.use(cors()); // Use cors middleware
app.use(express.json()); // Middleware for parsing JSON
app.use('/api', router); // Mount your API routes

const PORT = 3003;
app.listen(PORT, () => {
    console.log(`Backend Server is running on port ${PORT}`);
});

