const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }))

// console.log(express.static("public"));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/about",function(req,res){
  res.sendFile(__dirname + "/about.html");
});

app.get("/signup",function(req,res){
  res.sendFile(__dirname + "/signup.html");
});


app.post("/signup", function(req,res){
  console.log(req.body);
  // var email = req.body.email;
  // var password = req.body.paswd;
  // console.log(email, password);
  // res.send("hello thanks")
});



app.listen(5000,function(){
  console.log("server started on 3000");
})
