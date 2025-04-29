const express = require('express');
const app = express();

// Import routers
const propertyRouter = require('./routes/propertyRouter');
const adminRouter = require('./routes/adminRouter');

// Use routers
app.use('/properties', propertyRouter);
app.use('/admin', adminRouter);

// Server listening
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
