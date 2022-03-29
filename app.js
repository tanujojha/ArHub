const express = require('express');
const ejs = require('ejs');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const passportLocalMongoose = require('passport-local-mongoose');

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyparser.urlencoded({ extended: true }))

// console.log(express.static("public"));

app.use(session({
  secret: "this is a secret.",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/ArHubUserDB")

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




app.get("/",function(req,res){
  res.render("index");
});

app.get("/about",function(req,res){
  res.render("about");
});

app.get("/signup",function(req,res){
  res.render("signup");
});


app.post("/signup/creacc", function(req,res){
  // console.log(req.body);

  //************ ArHubUserDB code for Create Account ***********

    console.log("User requested to create account");
    User.register({username: req.body.email, firstName: req.body.fname, lastName: req.body.lname}, req.body.paswd, function(err, user){
  // console.log("the user log is : " + user);
  if(err){
    console.log(err);
    res.redirect("/signup");
  }else{
    passport.authenticate("local") (req, res, function(){
      res.redirect("/welcome");
    });
  }
});

});

  //************ ArHubUserDB code for Sign-In ***********


app.post("/signup", function(req, res){

    const user = new User({

      username: req.body.email,
      password: req.body.paswd
    });

    req.login(user, function(err){
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req, res, function(){

        res.redirect("/welcome");

      });
    }
  });

})





app.get("/welcome",function(req,res){
  if(req.isAuthenticated()){
    res.render("testweb");
  }else{
    res.redirect("/signup");
  }

});



app.listen(3000,function(){
  console.log("server started on 3000");
})
