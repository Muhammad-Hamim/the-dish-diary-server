const express = require('express');
const chef = require('./Data/chef.json');
const recipe = require('./Data/recipe.json')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/chef', (req, res) => {
  res.send(chef);
});
app.get('/chef/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const selectedChef = chef.find(ch => ch.id == id);
  res.send(selectedChef);
})
app.get('/recipe', (req, res) => {
  res.send(recipe);
})
app.get('/recipe/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const category = recipe.filter(item => item.id == id);
  res.send(category);
})

app.listen(port, () => {
  console.log('Console form dish diary');
})