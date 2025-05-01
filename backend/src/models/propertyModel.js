const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  type: {
    type: String,
    enum: ['buy', 'rent', 'pg', 'commercial'],
    required: true
  },
  propertyType: String, // apartment, villa, office, etc.
  price: { type: Number, required: true },
  size: Number, // in sq ft/meters
  bedrooms: Number,
  bathrooms: Number,
  ownerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  location: {
    address: String,
    city: String,
    coordinates: {
      type: [Number], // [longitude, latitude]
      index: '2dsphere'
    }
  }
});

module.exports = mongoose.model('Property', propertySchema);
