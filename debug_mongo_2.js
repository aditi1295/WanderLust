const MongoStore = require('connect-mongo');
console.log('Keys:', Object.keys(MongoStore));
if (MongoStore.MongoStore) {
    console.log('MongoStore.MongoStore exists');
    console.log('MongoStore.MongoStore.create:', MongoStore.MongoStore.create);
} else {
    console.log('MongoStore.MongoStore does not exist');
}
