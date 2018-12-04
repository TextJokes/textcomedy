const express = require('express');
const bodyParser = require('body-parser');
const TextComedy = require('../db/TextComedy.js')
require('dotenv').config();

const app = express();
const PORT = process.env.APP_SERVICE_PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));

app.get('/jokes', (req, res) => {
  console.log(req)
  TextComedy
  .find({})
  .sort({'rating': -1})
  .limit(20)
  .exec(function(error, jokes){
    if (error){
      console.log('ERROR, failed to read jokes from the DB', error)
    }
      res.status(200).send(JSON.stringify(jokes))
  })
})

app.patch('/joke/rate', (req, res) => {
  console.log(req.body.params)
  TextComedy
    .update({_id:req.body.params._id}, {$set:{ rating: req.body.params.newRating}}, function (error, joke){
      if (error){
        console.log('ERROR, failed to to update rating for the joke', error)
      }
        res.status(200).send(`Updated rating`)
    }) 
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});