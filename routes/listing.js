const express=require("express");
const router=express.Router();
const listing=require("../models/listing.js");
const wrapAsync=require("../utils/wrapasync.js");
const ExpressError=require("../utils/ExpressError.js");
const {listingSchema}=require("../schema.js");

const validatelisting=(req,res,next)=>{
  let {error}=listingSchema.validate(req.body);
         console.log(error);
         if(error){
            let errMsg=error.details.map((el)=>el.message).join(",")
           throw new ExpressError(400,errMsg)
         }
         else{
            next();
         }
};



//index route
 router.get("/",wrapAsync(async (req,res)=>{
 const allListings =   await listing.find({});
 res.render("listings/index.ejs",{ allListings})
    
 }));
 //new route and create route
 router.get("/new",(req,res)=>{
    res.render("listings/new.ejs")
 });
 //create route
 router.post("/",validatelisting ,
    wrapAsync(async (req,res,next)=>{     
        const newListing=   new listing(req.body.listing);
         await newListing.save();
         req.flash("success","New Listing created!")
         res.redirect("/listings");
     
    }
  ) );

 //show route
 router.get("/:id",wrapAsync( async (req,res)=>{
    let {id}= req.params;
    const Listing= await listing.findById(id).populate("reviews");
    if(!Listing){
      req.flash("error"," Listing Does Not Exist!")
     return  res.redirect("/listings");
    }
    res.render("listings/show.ejs",{Listing});
    
 }));
 //edit route
 router.get("/:id/edit",  wrapAsync(async (req,res)=>{

    let {id}= req.params;
   const Listing= await listing.findById(id);
    if(!Listing){
      req.flash("error"," Listing Does Not Exist!")
     return  res.redirect("/listings");
    }
   res.render("listings/edit.ejs",{listing:Listing})

 }));
 //update route
 router.put("/:id" ,validatelisting,
    wrapAsync(async (req,res)=>{
    
    let {id} =req.params;
       await listing.findByIdAndUpdate(id,{...req.body.listing});
       req.flash("success"," Listing Updated!")
       res.redirect(`/listings/${id}`);
    }
 ));
 //delete route
 router.delete("/:id",wrapAsync(async (req,res)=>{
  let {id}=req.params;
  let deleteListing=  await listing.findByIdAndDelete(id);
  console.log(deleteListing);
  req.flash("success","Listing Deleted!")
  res.redirect("/listings");
  }));
  


module.exports=router;