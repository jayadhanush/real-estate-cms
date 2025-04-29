const express = require('express');
const propertyRouter = express.Router();

// Home route
propertyRouter.get("/", (req, res) => {
    res.send("Welcome to the Property Home Page");
});

// List all properties
propertyRouter.get("/list", (req, res) => {
    res.send("List of all available properties");
});

// Get single property by ID
propertyRouter.get("/details/:id", (req, res) => {
    const propertyId = req.params.id;
    res.send(`Details of property with ID: ${propertyId}`);
});

// Contact about a property
propertyRouter.post("/contact/:id", (req, res) => {
    const propertyId = req.params.id;
    res.send(`Your inquiry for property ID ${propertyId} has been sent.`);
});

module.exports = propertyRouter;
