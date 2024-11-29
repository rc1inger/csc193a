'use strict';

const express = require('express');
const app = express();

// Exercise 1
app.get('/math/circle/:r', (req, res) => {
  const radius = parseFloat(req.params.r);
  if (isNaN(radius) || radius < 0) {
    res.type('json');
    return res.status(400).json({ error: 'Invalid radius' });
  }
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  res.type('json');
  res.json({
    area: parseFloat(area.toFixed(2)),
    circumference: parseFloat(circumference.toFixed(2))
  });
});

// Exercise 2
app.get('/hello/name', (req, res) => {
  const first = req.query.first;
  const last = req.query.last;
  const missingParams = [];

  if (!first) missingParams.push('first');
  if (!last) missingParams.push('last');

  if (missingParams.length > 0) {
    res.type('text')
    return res.status(400).send(`Missing Required GET parameters: ${missingParams.join(', ')}`);
  }
  res.type('text')
  res.send(`Hello ${first} ${last}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Exercise 1 URL: http://localhost:8000/math/circle/5
// Exercise 2 URL: http://localhost:8000/hello/name?first=Richard&last=Clinger