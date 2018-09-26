const faker = require('faker');
const fs = require('fs');
const csv = require('fast-csv');

let nameString = '';

// for (let i = 0; i < 10; i += 1) {
//   for (let j = 1; j <= 10; j += 1) {
//     // nameString += `{"id":"${i}","name":"${faker.commerce.color()} ${faker.hacker.noun()} ${i}"}${'\n'}`; => OBJECT
//     nameString += `${j + (10 * i)},${faker.commerce.color()} ${faker.hacker.noun()} ${j + (10000000 * i)}${'\n'}`; // => string
//   }
// }

const addOneMillion = (i) => {
  if (i > 9) {
    return;
  }
  nameString = '';
  for (let j = 1; j <= 1000000; j += 1) {
    nameString += `${j + (1000000 * i)},${faker.commerce.color()} ${faker.hacker.noun()} ${j + (1000000 * i)}${'\n'}`;
  }
  fs.appendFile('./public/names.csv', nameString, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
    addOneMillion(i + 1);
  });
};

addOneMillion(0);


console.log('created name object!')

// fs.writeFile('./public/names.csv', nameString, (err) => {
//   if (err) {
//     return console.log(err);
//   }

//   console.log("The file was saved!");
// });


// TO READ:

// const stream = fs.createReadStream("./public/names.csv");
 
// const csvStream = csv()
//   .on('data', (data) => {
//     console.log(data[0], ' ', data[1]);
//   })
//   .on('end', () => {
//     console.log("done");
//   });

// stream.pipe(csvStream);
