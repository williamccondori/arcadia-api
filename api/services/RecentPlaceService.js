const MongoContext = require('../../config/contexts/MongoContext');

class RecentPlaceService {
  constructor() {
    this.collection = 'inventory';
    this.context = new MongoContext();
  }

  async getAll() {
    const recentPlaces = this.context.connect().then((database) => {
      return database.collection(this.collection).find().toArray();
    });

    return await recentPlaces;
  }

  async create(recentPlace) {
    const recentPlaceId = this.context.connect().then((database) => {
      return database
        .collection(this.collection)
        .insertOne(recentPlace)
        .then((result) => {
          return result.insertedId;
        });
    });

    return {
      id: await recentPlaceId,
    };
  }
}

module.exports = RecentPlaceService;
