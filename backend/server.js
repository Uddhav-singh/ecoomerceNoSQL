const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();


const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`);
});

