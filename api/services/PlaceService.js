const MongoContext = require('../../config/contexts/MongoContext');
const gdal = require('gdal');

class PlaceService {
  constructor() {
    this.collection = 'places';
    this.context = new MongoContext();
  }

  async getAll() {
    const query = await this.context.connect().then(db => {
      return db.collection('places').find({});
    });
    // return await query.toArray();

    //const places = await this.context.getAll(this.collection, {});
    //console.log(places);

    let dataset = gdal.open('shape/LINEA_FERREA.shp');

    let json = null;

    dataset.layers.get(0).features.forEach(function (feature) {
      json = feature.getGeometry().toJSON();
    });

    return json || {};
  }

  async create({ place }) {
    const placeId = await this.context.create(this.collection, place);
    return placeId;
  }

  async delete(placeId) {
    return placeId;
  }
}

module.exports = PlaceService;
