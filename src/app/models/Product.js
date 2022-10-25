const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Product = new Schema({
  name: {type: String},
  des: {type: String},
  cate: {type: String},
  img: {type: String, unique: true},
  price: {type: String},
  slug: {type: String, slug:'name', unique: true}
});

module.exports = mongoose.model('Product', Product);
