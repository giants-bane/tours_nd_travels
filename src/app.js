const express = require("express");
const app=express();
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port=process.env.PORT || 80;

const mongoose=require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/registration",{
useNewUrlParser:true,
useUnifiedTopology:true,
}).then(()=>{
    console.log("Connection successful !");
}).catch((e)=>{
    console.log("No Connection !!!",e);
});

var nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    phone:Number,
    message:String
});

var User = mongoose.model("User", nameSchema);
app.post("/addname", (req, res) => {
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Yayy ! Your Message has been  Delivered !");
            console.log("Stored your message details to database.")
            console.log(req.body);
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});
const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));
app.listen(port,()=>{
    console.log('Server is running at port numbers '+port);
}) 