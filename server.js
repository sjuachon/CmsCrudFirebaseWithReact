const express = require('express');
const cors = require('cors'); // This library will enable cross origin resource sharing for all routes.
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
  res.send({
    token: 'jack1234'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));