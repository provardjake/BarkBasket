const { Schema } = require("mongoose");

const cartSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    products: [
        {
            productId: {
                type: Schema.Types.ObjectId,
                ref: "Product",
                required: true
            },
            name: String,
        }
    ],
    total: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = cartSchema;