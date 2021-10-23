const mongoose = require("mongoose");
const Subscription = require("./Subscription");

const Orders = new mongoose.Schema({
    subscriptionId: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Subscription"
    },
    deliveryDate: {
        type: Date,
        default: Date.now
    },
    paymentMethod: {
        type: String,
        default: "BKM",
        enum: ["BKM","MASTERPASS","PAYATDOOR"]
    },
    products: [
        {
            product: {
                type: String
            },
            quantitiy: {
                type: Number
            } 
        }
    ],
    totalAmount: {
        type: Number,
        min: 0
    },
    status: {
        type: String,
        enum: ["NEW","CONFIRMED","CANCELED","COMPLETED"]
    }
    
});

module.exports = mongoose.model("Orders",Orders);