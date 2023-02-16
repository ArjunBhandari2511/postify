const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 5000;
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB();

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(errorHandler)

app.use('/api/posts' , require('./routes/postRoutes'))
app.use('/api/users' , require('./routes/userRoutes'))

app.listen(port , ()=> console.log(`Server started running at ${port}`));