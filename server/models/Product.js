const {Schema, model} = require("mongoose");

const categorySchema = new Schema({tag: String});

const productSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        stock: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String
        }
    }
);

const Product = model("Product", productSchema);

module.exports = Product;