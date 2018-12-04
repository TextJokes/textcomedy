const TextComedy = require('./TextComedy.js');
// const db = require('./index.js');
const faker = require('faker');

for (let c = 1; c <= 100; c++) {
  let rand = Math.floor(Math.random() * 20 + 20);
  for (let i = 0; i < rand; i++) {

    let record = {};
    let star = Math.floor(Math.random() * 5 + 1);
    let helpful = Math.floor(Math.random() * 20) * (Math.random() < 0.1 ? -1 : 1);
    let reported = Math.random() < 0.01 ? true : false;
    
    record.stars = star;
    record.course = c;
    record.body = faker.lorem.paragraph();
    record.author = faker.name.findName();
    record.authorImgUrl = faker.image.avatar();
    record.created = faker.date.past();
    record.wasHelpful = helpful;
    record.reported = reported;
    console.log(record.stars)
    TextComedy.create(record, (err, data)=>{
      if (err) {
        console.log(err, 'error popultaing the db');
      }
    });
  }
}