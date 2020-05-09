const MongoContext = require('../../config/contexts/MongoContext');
const gdal = require('gdal');

class PlaceService {
  constructor() {
    this.collection = 'places';
    this.context = new MongoContext();
  }

  async getAll() {
    //const places = await this.context.getAll(this.collection, {});
    const shapeFilePath = 'C:/Users/William/Desktop/provincias/PROVINCIAS.shp';
    let dataset = gdal.open(shapeFilePath);
    console.log(dataset);
    return {} || {};
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
