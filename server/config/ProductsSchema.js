const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true,
        default: 0
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    category: {
        type: String,
        required: true
    },

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema)

module.exports = User