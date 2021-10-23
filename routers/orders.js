const express = require("express");
const router = express.Router();
const {registerOrder, getSubscriptionOrders} = require("../controller/orders");

router.post("/registerOrder",registerOrder);
router.get("/getSubscriptionOrders/:subscriptionId",getSubscriptionOrders);

module.exports = router;