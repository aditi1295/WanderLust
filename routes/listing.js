const express = require("express");
const router = express.Router();
const listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapasync.js");
const ExpressError = require("../utils/ExpressError.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn, isOwner, validatelisting } = require("../middleware.js");
const { populate } = require("../models/reviews.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');

const path = require("path");
// const {storage}=require("../cloudConfig.js");

// Fallback to local storage since Cloudinary is not configured correctly
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
})

const upload = multer({ storage });



router.route("/")
  .get(wrapAsync(listingController.index))
  .post(isLoggedIn,
    upload.single('listing[image]'), validatelisting,
    wrapAsync(listingController.createListing));

//new route and create route
router.get("/new",
  isLoggedIn,
  listingController
    .renderNewForm
);

router.get("/category/:category", async (req, res) => {
  try {
    const { category } = req.params;

    const allListings = await listing.find({
      category: { $regex: `^${category}$`, $options: "i" }
    });

    res.render("listings/index", {
      allListings,
      category,
      noResults: allListings.length === 0,
      search: null
    });
  } catch (err) {
    console.log(err);
    res.render("listings/index", {
      allListings: [],
      category: req.params.category,
      noResults: true,
      search: null
    });
  }
});



router.route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validatelisting,
    wrapAsync(listingController.updateListing)
  )

  .delete(isLoggedIn, isOwner, wrapAsync(listingController.deleteListing));

//edit route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(listingController.renderEditForm));






module.exports = router;

