const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const link = req.query.link;

  var array = [link, 'tb', 'abc'];
  res.send({ data: array });
});

app.listen(8080, () => console.log('alive on localhost:8080'));
