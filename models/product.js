const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Should be Provided"],
    },
    category: {
        type: String,
        required: [true, "Category Must Needed"],
    },
    description: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    key: {
        type: String,
        required: false,
    },
    blockbuster: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Product", productSchema)