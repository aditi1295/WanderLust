const express=require("express");
const router=express.Router();
const User=require("../models/user.js");
const wrapasync = require("../utils/wrapasync.js");
const passport =require("passport");
const {saveRedirectUrl}=require("../middleware.js");


router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
});

router.post("/signup" ,wrapasync(async(req,res)=>{
    try{
    let {username,email,password}=req.body;
     const newUser= new User({email,username});
    const registredUser= await User.register(newUser,password);
    console.log(registredUser);
     req.login(registredUser,(err)=>{
            if(err){
                next(err);
            }
            req.flash("success","Welcome to WanderLust");
            req.redirect(req.session.redirectUrl);
        });
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup")
    }
    }));

    router.get("/login",(req,res)=>{
        res.render("users/login.ejs");
    });

    router.post("/login",
        passport.authenticate('local',
            {failureRedirect:'/login',failureFlash:true}),
        async(req,res)=>{
          req.flash("success","Welcome to WanderLust! You are Logged In!");
          let redirectUrl=res.locals.redirectUrl || "/listings";
          res.redirect(redirectUrl)
    });

    router.get("/logout",(req,res)=>{
        req.logout((err)=>{
            if(err){
               return next(err);
            }
            req.flash("success","you are logged out now");
            res.redirect("/listings")
        });

    });

module.exports=router;