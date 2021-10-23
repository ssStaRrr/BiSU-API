const asyncHandler = require("express-async-handler");
const Subscription = require("../models/Subscription");
const CustomError = require("../helpers/errors/CustomError"); 

const getCustomerInfo = asyncHandler(async (req,res,next) => {
    const {phoneNumber} = req.params;
    console.log(phoneNumber);

    const list = await Subscription.find({phoneNumber});

    if(list.length==0) {
        return next(new CustomError("Belirtilen telefona ait kayıt bulunamamıştır.",403))
    }

    res.status(200)
    .json({
        list: list
    })
});

const registerSubscription = asyncHandler(async (req,res) => {
    const informations = req.body;
    console.log(informations);

    const subscription = new Subscription({
        ...informations
    })
    await subscription.save()
    .then( console.log("save process is succesful"))
    .catch(err => console.log(err))

    res.status(200)
    .json({
        data: informations
    })
});

module.exports = {
    getCustomerInfo,
    registerSubscription
}