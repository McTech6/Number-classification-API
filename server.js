import express from 'express';
import cors from 'cors'; // Add CORS middleware
import route from './middleware/route.js';

const app = express();

// Middleware for parsing JSON request bodies and enabling CORS
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

app.use("/", route);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});