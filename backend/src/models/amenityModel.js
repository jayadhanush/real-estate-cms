const mongoose = require('mongoose');

const amenitySchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  name: { type: String, required: true },
  category: { type: String, enum: ['features', 'security', 'etc'], required: true },
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Amenity', amenitySchema);