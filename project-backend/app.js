
require('dotenv').config()
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//My routes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");


//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors())

//My Routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);




//Set up default mongoose connection
var mongoDB = process.env.DATABASE;
mongoose.connect(mongoDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});
//Get the default connection
var db = mongoose.connection;

db.then(() => console.log("mongodb connected"))
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//starting the application
app.listen(port, () => console.log(`the app is running at ${port}`))