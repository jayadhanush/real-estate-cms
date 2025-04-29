const express = require('express');
const adminRouter = express.Router();

// Admin dashboard
adminRouter.get("/", (req, res) => {
    res.send("Welcome to the Admin Dashboard");
});

// View all properties (admin)
adminRouter.get("/properties", (req, res) => {
    res.send("Admin - Manage Properties");
});

// Add a new property
adminRouter.post("/properties/add", (req, res) => {
    res.send("Admin - Add New Property");
});

// Edit a property by ID
adminRouter.put("/properties/edit/:id", (req, res) => {
    const propertyId = req.params.id;
    res.send(`Admin - Edit property with ID: ${propertyId}`);
});

// Delete a property by ID
adminRouter.delete("/properties/delete/:id", (req, res) => {
    const propertyId = req.params.id;
    res.send(`Admin - Deleted property with ID: ${propertyId}`);
});

module.exports = adminRouter;
