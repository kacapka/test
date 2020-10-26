const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/data', (req, res) => {
  fs.readFile('server/db.json', 'utf8',
    (err, json) => {
      console.log(err);
      res.json(JSON.parse(json));
    },
  );
});

app.listen(3001, () => console.log(`App listening on port 3001!`));