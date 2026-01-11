const express=require("express");
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapasync.js");
const ExpressError=require("../utils/ExpressError.js");
const {reviewSchema}=require("../schema.js");
const Review=require("../models/reviews.js");
const listing=require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor}=require("../middleware.js");
const ReviewController =require("../controllers/reviews.js")


//reviews 
  // post route

 router.post("/",
  isLoggedIn, validateReview , wrapAsync(ReviewController.createReview));

  // delete  review route

router.delete("/:reviewId",
   isReviewAuthor, isLoggedIn,
   wrapAsync(ReviewController.destroyReview));

module.exports=router;