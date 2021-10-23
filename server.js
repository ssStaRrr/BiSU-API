const express = require("express");
const app = express();
const ejs = require("ejs");
const dotenv = require("dotenv");
const path = require("path");
const methodOverride = require("method-override");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/CustomErrorHandler");
const routerSubscription = require("./routers/subscription");
const routerOrder = require("./routers/orders");

app.listen(5000, () => {
    console.log("sunucu dinleniyor");
})  
//Environment Variables
dotenv.config({
    path:"./config/conf.env"
});

//Connect Database
connectDatabase();

//Setting ejs as view engine
app.set("view engine","ejs");

//Access to CSS file with public file  & access to form parameters with express urlencoder
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride("_method"));

app.use("/home",(async(req,res) => {
    res.render("index");
}))
app.use("/api", routerSubscription);
app.use("/api", routerOrder);

app.get("/", (req,res) => res.send("basarili :)"));
app.use(customErrorHandler);