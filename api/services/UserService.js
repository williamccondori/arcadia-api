const MongoContext = require('../../config/contexts/MongoContext');

class UserService {
  constructor() {
    this.collection = 'places';
    this.context = new MongoContext();
  }

  async getAll() {
    const places = await this.context.getAll(this.collection, {});
    return places || {};
  }

  async create({ user }) {
    const userId = await this.context.create(this.collection, user);
    return userId;
  }

  async delete(userId) {
    return userId;
  }
}

module.exports = UserService;
