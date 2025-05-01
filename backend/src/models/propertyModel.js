const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    images: [String],
    propertyType: {
        type: String,
        enum: ['Apartment', 'House', 'Villa', 'Commercial'],
        required: true
    },
    status: {
        type: String,
        enum: ['Available', 'Sold', 'Rented'],
        default: 'Available'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Property = mongoose.model('Property', propertySchema);
module.exports = Property;
