const Product = require("../models/product")

const getAllProducts = async (req, res) => {

    const {category, title, sort, select, key, blockbuster} = req.query
    const queryObject = {}

    if(category) {
        queryObject.category = category
    }

    if(key) {
        queryObject.key = key
    }

    if(blockbuster) {
        queryObject.blockbuster = blockbuster
    }

    if(title) {
        queryObject.title = { $regex: title, $options: "i" }
    }

    let apiData = Product.find(queryObject)

    if(sort) {
        let sortFix = sort.split(",").join(" ")
        apiData = apiData.sort(sortFix);
    }

    if(select) {
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1
    let limit = Number(req.query.limit) || 70

    let skip = (page - 1) * limit

    apiData = apiData.skip(skip).limit(limit)

    console.log(queryObject)

    const Products = await apiData
    res.status(200).json({ Products, nbHits: Products.length })
}

const getAllProductsTest = async (req, res) => {
    const Products = await Product.find(queryObject)
    res.status(200).json({ Products })
}

module.exports = { getAllProducts, getAllProductsTest }
