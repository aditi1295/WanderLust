const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

if (process.env.NODE_ENV != "production") {
  require('dotenv').config();
}
const MONGO_URL = process.env.DB_URL;

main()
  .then(() => {
    console.log("connected to db");
    return initDB();
  })
  .catch(err => console.log(JSON.stringify(err, null, 2)));

async function main() {
  await mongoose.connect(MONGO_URL, { dbName: 'wanderLust' });
}

const User = require("../models/user.js");

const initDB = async () => {
  await Listing.deleteMany({});

  let user = await User.findOne({ username: "testuser" });
  if (!user) {
    console.log("Test user not found, creating one...");
    const newUser = new User({ email: "test@test.com", username: "testuser" });
    user = await User.register(newUser, "password");
  }

  const fixedData = initData.data.map(obj => ({
    ...obj,
    owner: user._id,
  }));

  await Listing.insertMany(fixedData);
  console.log("data was initialized");
};
