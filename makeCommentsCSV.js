const faker = require('faker');
const fs = require('fs');
const casual = require('casual');

let nameString = 'id,comText,userId,songId,songTimeSpot,timeSincePost\n';
faker.seed(13579);

const getRandBool = () => Math.random() >= 0.5;

const getRandIntBetween = (min, max) => {
  return Math.floor(Math.random() * (Math.ceil(max) - Math.floor(min)) + min);
};

const addOneMillion = (i) => {
  if (i > 49) {
    return;
  }
  nameString = '';
  for (let j = 1; j <= 1000000; j += 1) {
    nameString += `${j + (1000000 * i)},${casual.sentence},${getRandIntBetween(1, 20000000)},${getRandIntBetween(1, 10000000)},${`${getRandIntBetween(1, 4)}:${getRandIntBetween(30, 60)}`},${getRandIntBetween(1, 60)}${'\n'}`;
  }
  fs.appendFile('../data/comments.csv', nameString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log('The file was saved! Iteration: ', i);
    addOneMillion(i + 1);
    return undefined;
  });
};

fs.writeFile('../data/comments.csv', nameString, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('The header was written!');
  addOneMillion(0);
  return undefined;
});
