const {users} = require('../model/index.js');
const faker = require('faker');
const moment = require('moment');

for (let i = 0; i < 33; i++) {
  new users({
    firstName: faker.name.firstName(),
    review: faker.lorem.sentences(2),
    img: faker.image.avatar(),
    date: faker.date.between("2017-03-17", "2018-07-25"),
  }).save((err, data) => {
    if (err) {console.log('Here is a ERROR: ',err)}
    else{console.log('created: ',data)};   
  })
}

for (let i = 0; i < 33; i++) {
  new users({
    firstName: faker.name.firstName(),
    review: faker.lorem.sentences(3),
    img: faker.image.avatar(),
    date: faker.date.between("2017-03-17", "2018-07-25"),
  }).save((err, data) => {
    if (err) {console.log('Here is a ERROR: ',err)}
    else{console.log('created: ',data)};   
  })
}

for (let i = 0; i < 33; i++) {
  new users({
    firstName: faker.name.firstName(),
    review: faker.lorem.sentences(4),
    img: faker.image.avatar(),
    date: faker.date.between("2017-03-17", "2018-07-25"),
  }).save((err, data) => {
    if (err) {console.log('Here is a ERROR: ',err)}
    else{console.log('created: ',data)};   
  })
}

for (let i = 0; i < 1; i++) {
  new users({
    firstName: faker.name.firstName(),
    review: faker.lorem.sentences(6),
    img: faker.image.avatar(),
    date: faker.date.between("2017-03-17", "2018-07-25"),
  }).save((err, data) => {
    if (err) {console.log('Here is a ERROR: ',err)}
    else{console.log('created: ',data)};   
  })
}

console.log(faker.name.firstName());
console.log(faker.lorem.sentences(2));
console.log(faker.image.avatar());
console.log(moment(faker.date.between("03-17-2017", "07-25-2018")).format("MMMM D YYYY"));