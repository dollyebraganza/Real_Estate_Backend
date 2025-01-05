import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import  userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect("mongodb+srv://Dolly:Dolly15@real-estate.726rp.mongodb.net/?retryWrites=true&w=majority&appName=Real-Estate").then(() => {
    console.log('Connected to MongoDB!')
}).catch((err) => {
    console.log(err);
});

const app = express();
app.get('/',(req,res)=>{
    res.send({"Start":true})
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.use('/api/user', userRouter);

