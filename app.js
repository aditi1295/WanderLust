 //server create->listing->INDEX ROUTE->

 // joi->to validate schema server side validation schema
 const express=require("express");
const app=express();
const mongoose=require("mongoose");
const listing=require("./models/listing.js")
const path=require("path");
const methodOverride=require("method-override");
const ejsMate=require("ejs-mate");
app.use(express.static(path.join(__dirname,"/public")));
const wrapAsync=require("./utils/wrapasync.js");
const ExpressError=require("./utils/ExpressError.js");
const {listingSchema}=require("./schema.js");
const Listing = require("./models/listing.js");


const MONGO_URL="mongodb://127.0.0.1:27017/wanderLust";
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);


main()
.then(()=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.get("/",(req,res)=>{
    res.send("Hii, i am root")
});
// app.get("/testListing", async (req,res)=>{
//      let sampleListing= new listing({
//         title:"My New Villa",
//         description:"By The Beach",
//         price:1200,
//         location:"Calangute Goa",
//         country:"India",
//      });
//       await sampleListing.save();
//       console.log("sample was saved");
//       res.send("successful testing");
// });


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
}

//index route
 app.get("/listings",wrapAsync(async (req,res)=>{
 const allListings =   await listing.find({});
 res.render("listings/index.ejs",{ allListings})
    
 }));
 //new route and create route
 app.get("/listings/new",(req,res)=>{
    res.render("listings/new.ejs")
 });
 //create route
 app.post("/listings",validatelisting ,
    wrapAsync(async (req,res,next)=>{     
         
        const newListing=   new listing(req.body.listing);
         await newListing.save();
        res.redirect("/listings");
     
    }
  ) );

 //show route
 app.get("/listings/:id",wrapAsync( async (req,res)=>{
    let {id}= req.params;
   const Listing= await listing.findById(id);
   res.render("listings/show.ejs",{Listing});
    
 }));
 //edit route
 app.get("/listings/:id/edit",  wrapAsync(async (req,res)=>{

    let {id}= req.params;
   const Listing= await listing.findById(id);
   res.render("listings/edit.ejs",{listing:Listing})

 }));
 //update route
 app.put("/listings/:id" ,validatelisting,
    wrapAsync(async (req,res)=>{
    
    let {id} =req.params;
       await listing.findByIdAndUpdate(id,{...req.body.listing});
       res.redirect(`/listings/${id}`);
    }
 ));
 //delete route
 app.delete("/listings/:id",wrapAsync(async (req,res)=>{
  let {id}=req.params;
  let deleteListing=  await listing.findByIdAndDelete(id);
  console.log(deleteListing);
  res.redirect("/listings");

 }));
 app.use((req,res,next)=>{
  next(new ExpressError(404,"Page Not Found!"));
});

 app.use((err,req,res,next)=>{
    let {statusCode=500,message="Something went wrong"}=err;
    res.status(statusCode).render("listings/error.ejs",{message});
    // res.status(statusCode).send(message);
 });

app.listen(8080,()=>{
    console.log("app.listening on port 8080");
});

