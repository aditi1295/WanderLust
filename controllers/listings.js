const listing = require("../models/listing.js");
const ExpressError = require("../utils/ExpressError");
const { listingSchema } = require("../schema.js");

module.exports.index = async (req, res) => {
  const { search } = req.query;
  let allListings = [];

  if (search && search.trim() !== "") {
    const searchPattern = search
      .trim()
      .replace(/\s+/g, "\\s*");

    allListings = await listing.find({
      location: { $regex: searchPattern, $options: "i" }
    });
  } else {
    allListings = await listing.find({});
  }

  res.render("listings/index.ejs", {
    allListings,
    category: null,
    search: search || "",
    noResults: search && allListings.length === 0
  });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs")
}

module.exports.createListing = async (req, res) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error.details[0].message);
  }
  if (!req.user) {
    req.flash("error", "You must be logged in!");
    return res.redirect("/login");
  }

  const newListing = new listing(req.body.listing);
  newListing.owner = req.user._id;

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;

    // If using local storage, convert path to URL
    if (req.file.destination === 'public/uploads/') {
      url = "/uploads/" + filename;
    }

    newListing.image = {
      url,
      filename
    };
  }

  await newListing.save();
  req.flash("success", "New Listing created!");
  res.redirect("/listings");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const Listing = await listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      }
    })
    .populate("owner");
  if (!Listing) {
    req.flash("error", " Listing Does Not Exist!")
    return res.redirect("/listings");
  }
  console.log(Listing);
  res.render("listings/show.ejs", { Listing, geoapifyKey: process.env.GEOAPIFY_KEY });

}

module.exports.renderEditForm = async (req, res) => {

  let { id } = req.params;
  const Listing = await listing.findById(id);
  if (!Listing) {
    req.flash("error", " Listing Does Not Exist!")
    return res.redirect("/listings");
  }

  let orignalImageUrl = Listing.image.url;
  orignalImageUrl = orignalImageUrl.replace("/upload", "/upload/h_300,w_250");
  res.render("listings/edit.ejs", { listing: Listing, orignalImageUrl })

}


module.exports.updateListing = async (req, res) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error.details[0].message);
  }
  let { id } = req.params;
  let updatedlisting = await listing.findByIdAndUpdate(id, { ...req.body.listing });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;

    // If using local storage, convert path to URL
    if (req.file.destination === 'public/uploads/') {
      url = "/uploads/" + filename;
    }

    updatedlisting.image = { url, filename };
    await updatedlisting.save();
  }
  req.flash("success", " Listing Updated!")
  res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  let deleteListing = await listing.findByIdAndDelete(id);
  console.log(deleteListing);
  req.flash("success", "Listing Deleted!")
  res.redirect("/listings");
}