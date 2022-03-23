// Exercise
// WRITE THE FOLLOWING USERS NAME IN A FILE AND THEN DISPLAY THEM
// const users = [
//   { name: "Kaddy" },
//   { name: "Marc" },
//   { name: "Prince" },
//   { name: "Kally" }
// ]

const fs = require('fs');
const path = require('path');

// WRITE THE FOLLOWING USERS NAME IN A FILE AND THEN DISPLAY THEM
const users = [
  { name: "Kaddy" },
  { name: "Marc" },
  { name: "Prince" },
  { name: "Kally" }
]

const jsonUsers = JSON.stringify(users);
fs.writeFileSync('./data/users.json', jsonUsers, 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }
});

let data = fs.readFileSync('./data/users.json')
let usersInfo = JSON.parse(data);
console.log(usersInfo);