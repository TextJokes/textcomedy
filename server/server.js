const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.APP_SERVICE_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));

app.get('/', (req, res) => {
  res.status(200)
  res.send('the request was heard on /').end();
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});