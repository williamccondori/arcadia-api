const authRoutes = {
  // places
  'GET /places': 'PlaceController.getAll',
  'POST /places': 'PlaceController.create',


  'GET /recent_places': 'RecentPlaceController.getAll',
  'POST /recent_places': 'RecentPlaceController.create',
};

module.exports = authRoutes;
