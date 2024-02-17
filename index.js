require('dotenv').config()
const express = require("express");
const { data } = require('./data.json');
// import { getCurrencies } from "./controllers/currencies.controller";
const {getCurrencies, getCurrenciesWithSymbol} = require('./controllers/currencies.controller');
const { getAllUsers, getUsersByUuid, searchUsersByQuery } = require("./controllers/users.controller");
const app = express();
const currencyRoutes = require("./routes/currencies.routes");
const userRoutes = require("./routes/users.routes");
const blogRoutes = require("./routes/blogs.routes");
const { verifyAuth } = require("./middlewares/verifyAuth");
const mongoose = require("mongoose")


const PORT = 8082;
const DB_URI = "mongodb://127.0.0.1:27017/website"
mongoose
    .connect(`${DB_URI}`)
    .then(() => console.log("Connected to DB at", DB_URI))
    .catch((e) => console.log("Failed to connect to DB", e))

//app.use(verifyAuth);
app.use(express.json());
app.use('/currencies', currencyRoutes);
app.use('/users', userRoutes);
app.use('/blogs', blogRoutes);


app.listen(PORT, () => {
    console.log("Listening at", PORT);
})