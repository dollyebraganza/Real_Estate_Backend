import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect("mongodb+srv://Dolly:Dolly15@real-estate.726rp.mongodb.net/?retryWrites=true&w=majority&appName=Real-Estate").then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.log(err);
});

const app = express();
app.use(cors());

app.use(express.json());

app.use(cookieParser());


app.get('/',(req,res)=>{
    res.send({start: "input"})
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.message || ' Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
})

