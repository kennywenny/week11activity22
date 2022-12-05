const express = require('express');
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');
const routes = require('./routes')

// Helper method for generating unique ids
const uuid = require('./helpers/uuid');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use(routes)


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
