const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URL;
console.log("Testing connection to:", uri.replace(/:([^:@]+)@/, ":****@"));

const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 5000,
    tlsAllowInvalidCertificates: true
});

async function run() {
    try {
        console.log("Attempting to connect...");
        await client.connect();
        console.log("Connected successfully to server!");
        const db = client.db('wanderlust');
        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections.map(c => c.name));
    } catch (e) {
        console.error("Connection failed!");
        console.error("Error name:", e.name);
        console.error("Error message:", e.message);
        if (e.cause) console.error("Cause:", e.cause);
    } finally {
        await client.close();
    }
}
run();
