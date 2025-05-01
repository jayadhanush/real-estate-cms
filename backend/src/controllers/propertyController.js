const propertyService = require('../services/propertyServices');

exports.createProperty = async (req, res) => {
  try {
    const newProperty = await propertyService.createProperty(req.body);
    res.status(201).json(newProperty);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await propertyService.getAllProperties();
    res.status(200).json(properties);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPropertyById = async (req, res) => {
  try {
    const property = await propertyService.getPropertyById(req.params.id);
    if (!property) return res.status(404).json({ error: 'Not found' });
    res.status(200).json(property);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateProperty = async (req, res) => {
  try {
    const updated = await propertyService.updateProperty(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteProperty = async (req, res) => {
  try {
    const deleted = await propertyService.deleteProperty(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Not found' });
    res.status(200).json({ message: 'Deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
