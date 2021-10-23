const express = require("express");
const router = express.Router();

const {getCustomerInfo, registerSubscription} = require("../controller/subscription");

router.post("/registerSubscription", registerSubscription);
router.get("/getCustomerInfo/:phoneNumber",getCustomerInfo);

module.exports = router;