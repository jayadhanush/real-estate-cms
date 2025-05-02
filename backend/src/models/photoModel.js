const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  url: { type: String, required: true },
  isFeatured: { type: Boolean, default: false },
  order: { type: Number }
});

module.exports = mongoose.model('Photo', photoSchema);