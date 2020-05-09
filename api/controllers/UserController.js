const UserService = require('../services/UserService');

class UserController {
  async getAll(req, res) {
    const result = await new UserService().getAll();
    return res.json(result);
  }

  async login(req, res) {
    if (req.body) {
      const { email, password } = req.body;
      if (email && password) {
        const result = await new UserService().getAll();
        return res.json();
      }
    }
    return res.status(400).json({ message: 'Invalid credentials' });
  }
}

module.exports = UserController;
