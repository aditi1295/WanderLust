require('dotenv').config();
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

console.log("Testing Cloudinary Config...");
console.log("Cloud Name:", process.env.CLOUD_NAME);
console.log("API Key:", process.env.CLOUD_API_KEY);

cloudinary.api.ping((error, result) => {
    if (error) {
        console.error("Cloudinary Connection Failed:", error);
    } else {
        console.log("Cloudinary Connection Successful:", result);
    }
});
