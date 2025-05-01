const Property = require('../models/propertyModel');

exports.createProperty = async (data) => {
  return await Property.create(data);
};

exports.getAllProperties = async () => {
  return await Property.find({});
};

exports.getPropertyById = async (id) => {
  return await Property.findById(id);
};

exports.updateProperty = async (id, updateData) => {
  return await Property.findByIdAndUpdate(id, updateData, { new: true });
};

exports.deleteProperty = async (id) => {
  return await Property.findByIdAndDelete(id);
};
