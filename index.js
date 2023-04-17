require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const cors = require('cors');

const mongostring = process.env.ATLA_URI;
const app = express();
app.use(cors());

app.use(express.json());

mongoose.connect(mongostring);

const database = mongoose.connection;

database.on('error', (err) => console.log(err));

database.on('connected', () => console.log('Database connected'));
// Find all the information about each products
app.get('/api/product', async (req, res) => {
  db = await new mongodb.MongoClient(mongostring).connect();
  let data = await db.db('cproject').collection('posts').find({}).toArray();
  res.send(data);
});

app.get('/', async (req, res) => {
  res.send('connected');
});

app.listen(5000, (req, res) => {
  console.log('server started at localhost:5000');
});
