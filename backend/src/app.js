const express = require('express');
const app = express();

// Import routers
const propertyRouter = require('./routes/propertyRouter');//this line changed by mahendran
const adminRouter = require('./routes/adminRouter');



// Use routers
app.use('/properties', propertyRouter);// this line changed by mahendran
app.use('/admin', adminRouter);

// Server listening
module.exports=app;
