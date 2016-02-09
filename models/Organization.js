var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;

var schema = new mongoose.Schema({
  name: { type: String, required: true },
  num_employees: { type: String, required: true }
});

module.exports = mongoose.model('Organization', schema);
