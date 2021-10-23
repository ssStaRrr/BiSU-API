const asyncHandler = require("express-async-handler");
const Orders = require("../models/Orders");
const CustomError = require("../helpers/errors/CustomError"); 

const registerOrder = asyncHandler(async (req,res) => {
    const informations = req.body;
    console.log(informations);

    const order = new Orders({
        ...informations
    })
    await order.save()
    .then(console.log("save process is succesful"))
    .catch(err => console.log(err))

    res.status(200)
    .json({
        data: informations
    })
});

const getSubscriptionOrders = asyncHandler(async (req,res,next) => { 
    const {subscriptionId} = req.params;
    console.log(subscriptionId);

    const list = await Orders.find({subscriptionId});

    if(list.length==0) {
        return next(new CustomError("Belirtilen kullaniciya ait kayit bulunamamistir.",403))
    }

    res.status(200)
    .json({
        list: list
    })
})

module.exports = {
    registerOrder,
    getSubscriptionOrders
}