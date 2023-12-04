const db = require('../config/connection');
const {User, Product } = require('../models');
const productSeeds = require('./productSeed.json');
const cleanDB = require('./cleanDB');

//seeds the database
db.once('open', async () => {
  try {
    await cleanDB("Product", "products");

    await Product.create(productSeeds);
  } 
  catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Database Seeded!');
  process.exit(0);
});