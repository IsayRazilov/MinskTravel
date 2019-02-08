var express        = require("express"),
    mongoose       = require("mongoose"),
    bodyParser     = require("body-parser"),
    methodOverride = require("method-override")


var app = express();

mongoose.connect("mongodb://aciles1221:qwerty1221@ds221645.mlab.com:21645/minsk_travel");
app.use(bodyParser.urlencoded({extended: true}))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "/public"))


app.get("/",function(req,res){
    res.render("home");
});


// app.listen(3000,function(){
//     console.log("Server started at port 3000");
// });


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is up");
});