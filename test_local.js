const { MongoClient } = require('mongodb');

const uri = "mongodb://127.0.0.1:27017/wanderlust";
console.log("Testing connection to:", uri);

const client = new MongoClient(uri, {
    serverSelectionTimeoutMS: 2000
});

async function run() {
    try {
        console.log("Attempting to connect...");
        await client.connect();
        console.log("Connected successfully to LOCAL server!");
        const db = client.db('wanderlust');
        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections.map(c => c.name));
    } catch (e) {
        console.error("Connection failed!");
        console.error(e.message);
    } finally {
        await client.close();
    }
}
run();
