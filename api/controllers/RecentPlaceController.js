const RecentPlaceService = require('../services/RecentPlaceService');

class RecentPlaceController {
  async getAll(req, res) {
    const result = await new RecentPlaceService().getAll();
    return res.json(result);
  }

  async create(req, res) {
    const result = await new RecentPlaceService().create(req.body);
    return res.json(result);
  }
}

module.exports = RecentPlaceController;
