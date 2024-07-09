require("dotenv").config()
const express = require('express')
const app = express()
const connectDb = require("./db/connect")

const PORT = process.env.PORT || 5000

const products_routes = require("./routes/products")

app.use("/", products_routes);


const start = async () => {
    try {
        await connectDb(process.env.MONGOBD_URL)
        app.listen(PORT, () => {
            console.log(`${PORT} port is Connected`)
        })
    } catch (error) {
        console.log(error);
    }
}

start();
