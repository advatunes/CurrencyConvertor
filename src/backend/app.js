const express = require("express");
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000', 'https://advatunes.movies.nomoreparties.sbs'],
    credentials: true,
  })
);
app.options('*', cors());
