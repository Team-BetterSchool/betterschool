import express from 'express';
import { json } from 'body-parser';
import db from './db';
import Student from './db/models/Student';

const app = express();
const jsonParser = json();
const PORT = 3001;

app.get('/', (req, res) => {
  console.log('first route');
});

app.post('/students', jsonParser, (req, res) => {
  // get req.body
  // db call => db.collection('students').insertOne(new Student( req.body contents))
  // return a success object
});

app.post('/', jsonParser, (req, res) => {
  console.log('first post route');
});

app.listen(PORT, () => {
  console.log('server live!');
});

export default app;
