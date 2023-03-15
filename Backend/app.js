const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/laptop-routes");
const cors = require('cors')
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/laptops", router);

mongoose.connect(
    "mongodb+srv://admin:Test123@cluster0.duj84l0.mongodb.net/laptopStore?retryWrites=true&w=majority"
)
    .then(() => console.log("Terhubung ke Database"))
    .then(() => {
        app.listen(5000);
    }).catch((err) => console.log(err));