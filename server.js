const express = require('express');
const dotenv = require('dotenv')
const colors = require('colors')
const morgan = require('morgan')
const cors = require('cors');
const connectDB = require('./config/db');

//dot config
dotenv.config()

//mongo DB Connection (dotenv se pehlr kam nahi krega)
connectDB();

//rest object
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//1st test route 
app.use('/api/v1/test' , require('./routes/testRoutes'));

//port 
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT , ()=>{
    console.log(`Node server running on port ${process.env.PORT}`.bgGreen.white);
});
