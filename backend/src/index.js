const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const dotenv = require('dotenv').config();

const app = express();
mongoose.set('useCreateIndex', true);
mongoose.connect(process.env.connectionString,
  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);