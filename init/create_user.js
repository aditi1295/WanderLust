const mongoose = require('mongoose');
const User = require('../models/user.js');
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust_local";

async function main() {
    await mongoose.connect(MONGO_URL);

    // Check if user exists
    let user = await User.findOne({ username: "testuser" });
    if (!user) {
        const newUser = new User({ email: "test@test.com", username: "testuser" });
        user = await User.register(newUser, "password");
        console.log("Created new user.");
    } else {
        console.log("User already exists.");
    }

    console.log("USER_ID_FOR_SEED:", user._id.toString());
    await mongoose.disconnect();
}
main();
