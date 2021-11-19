const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  const link = req.query.link;

  var array = [link, 'exampleAnswer'];
  res.send({ link: array[0],
            answers: array[1] });
});

app.listen(8080, () => console.log('alive on localhost:8080'));
