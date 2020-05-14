const mongo = require('./connections');

const USER = encodeURIComponent(mongo.dbUser);
const PASS = encodeURIComponent(mongo.dbPass);
const NAME = mongo.dbName;

const URI = `mongodb+srv://${USER}:${PASS}@${mongo.dbHost}/${NAME}?retryWrites=true&w=majority`;

const { MongoClient, ObjectId } = require('mongodb');

class MongoContext {
  constructor() {
    this.client = new MongoClient(URI, { useNewUrlParser: true, useUnifiedTopology: true, });
    this.dbName = NAME;
  }

  connect() {
    if (!MongoContext.connection) {
      MongoContext.connection = new Promise((resolve, reject) => {
        this.client.connect((error) => {
          if (error) {
            reject(error);
          }
          resolve(this.client.db(this.dbName));
        });
      });
    }
    return MongoContext.connection;
  }
  
  create(collection, data) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).insertOne(data);
      })
      .then((result) => result.insertedId);
  }

  update(collection, id, data) {
    return this.connect()
      .then((db) => {
        return db
          .collection(collection)
          .updateOne({ _id: ObjectId(id) }, { upsert: true });
      })
      .then((result) => result.upsertedId || id);
  }

  delete(collection, id) {
    return this.connect()
      .then((db) => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      })
      .then((result) => id);
  }
}

module.exports = MongoContext;
