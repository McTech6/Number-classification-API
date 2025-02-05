import express from 'express';
import route from './middleware/route.js'

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());
const PORT = 3000

app.use("/", route)


app.listen(PORT, ()=>{
    console.log(`Server runing on port: ${PORT}`)
})