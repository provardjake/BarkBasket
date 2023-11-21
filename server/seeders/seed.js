const db = require('../config/connection');
const {User, Product } = require('../models');
const productSeeds = require('./productSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  try {
    await cleanDB("Product", "products");

    await Product.create(productSeeds);

    // for (let i = 0; i < productSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }
  } 
  catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('Database Seeded!');
  process.exit(0);
});