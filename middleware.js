
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema}=require("./schema.js");
const listing=require("./models/listing.js");
const Review=require("./models/reviews.js");
const {reviewSchema}=require("./schema.js");


module.exports.isLoggedIn=(req,res,next)=>{
    console.log(req.user)
 if(!req.isAuthenticated()){
   //redirect url save
   req.session.redirectUrl=req.originalUrl;

     req.flash("error","You Are Not The Owner Of This listing!");
      return res.redirect("/login");
   }
   next();
};
module.exports.saveRediectUrl=(req,res,next)=>{
   if(req.session.redirectUrl){
      res.locals.redirectUrl=req.session.redirectUrl;
   }
   next();
};

module.exports.isOwner=async(req,res,next)=>{
       let {id} =req.params;
       let Listing=await listing.findById(id);
       if( !Listing.owner.equals(res.locals.currUser._id)){
          req.flash("error","you dont have permission to edit");
          return  res.redirect(`/listings/${id}`);
       }
       next();
};
module.exports.validatelisting = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);

  if (error) {
    const errMsg = error.details.map(el => el.message).join(", ");
    return next(new ExpressError(400, errMsg));
  }
  next();
};



module.exports.validateReview=(req,res,next)=>{
  let {error}=reviewSchema.validate(req.body);
         if(error){
            let errMsg=error.details.map((el)=>el.message).join(",")
           throw new ExpressError(400,errMsg)
         }
         else{
            next();
         }
};

module.exports.isReviewAuthor=async(req,res,next)=>{
       let {id,reviewId} =req.params;
       let Listing=await Review.findById(id);
       if( !review.author.equals(res.locals.currUser._id)){
          req.flash("error","YouAre Not The Author OF This Review");
          return  res.redirect(`/listings/${id}`);
       }
       next();
};