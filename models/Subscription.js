const mongoose = require("mongoose");

const Subscription = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true,"name can't be blank"]
    },
    address: {
        type:String,
        required: [true,"address can't be blank"],
        minlength: [20," Please provide a address with min 15 characters "]
    },
    locationName: {
        type: String
    },
    subCityName: {
        type: String
    },
    cityName: {
        type: String
    },
    brand: {
        type: String
    },
    phoneNumber: {
        type: String,
        required: true
    },
    distributorNumber: {
        type: String
    }
});

module.exports = mongoose.model("Subscription",Subscription);