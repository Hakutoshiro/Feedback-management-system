import { feedbackRouter } from "./routes/feedback";

const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
feedbackRouter
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
})); 



app.use('/',feedbackRouter)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})