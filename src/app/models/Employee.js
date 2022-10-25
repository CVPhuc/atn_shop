const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);


const Employee = new Schema({
  name: {type: String},
  age: {type: String},
  address: {type: String},
  slug: {type: String, slug:'name', unique: true}

});

module.exports = mongoose.model('Employee', Employee);