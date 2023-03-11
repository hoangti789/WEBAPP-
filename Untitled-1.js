// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/blog', (req, res) => {
  res.send('My Blog');
});

app.get('/blog/:id', (req, res) => {
  const id = req.params.id;
  res.send(`Blog Post ${id}`);
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});


// app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost/myblog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Post = mongoose.model('Post', postSchema);

app.get('/blog', (req, res) => {
  Post.find((err, posts) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.json(posts);
    }
  });
});

app.get('/blog/:id', (req, res) => {
  const id = req.params.id;
  Post.findById(id, (err, post) => {
    if (err) {
      console.error(err
