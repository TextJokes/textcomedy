const TextComedy = require('./TextComedy.js');
// const db = require('./index.js');
const faker = require('faker');

for (let c = 1; c <= 100; c++) {
  const numGen = (min, max) => Math.floor(Math.random() * (max - min + min)) + min;
    let joke = {};       
    joke.rating = numGen(1, 100000);
    joke.title = faker.lorem.sentence();
    joke.body = faker.lorem.paragraph();
    joke.author = faker.name.findName();
    joke.authorImgUrl = faker.image.avatar();
    joke.created = faker.date.past();
    joke.edited = faker.date.past();
    joke.reported = faker.random.boolean();    
    joke.punch = faker.random.boolean();
    joke.punchtext = faker.lorem.paragraph();
    console.log(joke)
    TextComedy.create(joke, (err, data)=>{
      if (err) {
        console.log(err, 'error popultaing the db');
      }
    });
}