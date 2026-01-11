const MongoStore = require('connect-mongo');
console.log('Type of MongoStore:', typeof MongoStore);
console.log('MongoStore keys:', Object.keys(MongoStore));
console.log('MongoStore.create:', MongoStore.create);
try {
    const store = MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/test' });
    console.log('Store created successfully');
} catch (e) {
    console.log('Error creating store:', e.message);
}
