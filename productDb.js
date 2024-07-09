require("dotenv").config();
const connectDb = require("./db/connect")
const Product = require("./models/product")

const ProductJson = require("./products.json")

const start = async () => {
    try {
        await connectDb(process.env.MONGOBD_URL)
        await Product.deleteMany()
        await Product.create(ProductJson)
        console.log("Success");
    } catch (error) {
        console.log(error);
    }
}

start();