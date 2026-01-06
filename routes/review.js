const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapasync.js");
const ExpressError=require("../utils/ExpressError.js");
const {reviewSchema}=require("../schema.js");
const Review=require("../models/reviews.js");
const listing=require("../models/listing.js");



const validateReview=(req,res,next)=>{
  let {error}=reviewSchema.validate(req.body);
         if(error){
            let errMsg=error.details.map((el)=>el.message).join(",")
           throw new ExpressError(400,errMsg)
         }
         else{
            next();
         }
};

//reviews 
  // post route

 router.post("/", validateReview , wrapAsync(async(req,res)=>{
      console.log(req.params.id)
      let Listing=await listing.findById(req.params.id);
      let newReview= new Review(req.body.review);
      Listing.reviews.push(newReview);

   await   newReview.save();
   await Listing.save();
   req.flash("success","New Review created!")
  res.redirect(`/listings/${Listing._id}`);
  }));

  // delete  review route

router.delete("/:reviewId",
   wrapAsync(async (req,res)=>{
   let {id,reviewId}= req.params;
    await listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    req.flash("success","Review Deleted!")
        res.redirect(`/listings/${id}`) ;                                     
}
));

module.exports=router;