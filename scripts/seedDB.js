const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/mycharacters_db"
);

const mycharacterSeed = [
  {
    name: "1111",
    age: 10,
  },
  {
    name: "3333",
    age: 11,
  },
  {
    name: "1111",
    age: 12,
  },
];

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(mycharacterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
