const express = require('express');
const dotenv = require('dotenv').config();

const PORT = process.env.PORT || 6000;

const app = express();

app.use('/openai', require('./routes/openai'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));