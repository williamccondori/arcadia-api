const PlaceService = require('../services/PlaceService');

class PlaceController {
  async getAll(req, res) {
    const result = await new PlaceService().getAll();
    return res.json(result);
  }

  async create(req, res) {
    if (req.body) {
      const result = await new PlaceService().create(req.body);
      return res.json(result);
    }
    return res.status(400).json({ message: 'Invalid credentials' });
  }
}

module.exports = PlaceController;
