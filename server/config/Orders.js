const mongoose = require("mongoose")

const Orders = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        seller: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    }],
    totalPrice: {
        type: Number,
        required: true,
    },
    shippingAddress: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
    },

}, { timestamps: true });

const Order = mongoose.model('Order', ProductsSchema)

module.exports = Order


/*

const order = new Order({
    user: customer._id, // customer is the user placing the order
    products: [
      {
        product: product._id, // Reference to a product document
        quantity: 2,           // Quantity of the product ordered
        price: product.price,  // Price of the product at the time of the order
        seller: product.seller // Reference to the seller of the product
      }
    ],
    totalPrice: 2400,          // Calculate total based on products and quantity
    shippingAddress: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      postalCode: '10001',
      country: 'USA',
    },
    orderStatus: 'pending',
  });
  
  order.save()
    .then(savedOrder => {
      console.log('Order placed:', savedOrder);
    })
    .catch(err => {
      console.error('Error placing order:', err);
    });

    */