const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const projectRouter = require('./routes/projects');

const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200
}

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;


app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/projects', projectRouter);

connectDB();


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    });