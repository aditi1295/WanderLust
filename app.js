//server create->listing->INDEX ROUTE->

// joi->to validate schema server side validation schema

if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}
console.log(process.env.SECRET)

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const ListingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const session = require("express-session");
// const MongoStore = require('connect-mongo').MongoStore;
const MongoStore = require("connect-mongo").default;



const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const { clear } = require('console');

const dburl = process.env.DB_URL;

if (!dburl) {
    console.error("FATAL ERROR: DB_URL is not defined in .env file");
    process.exit(1);
}

// Log connection attempt (masking password)
const maskedUrl = dburl.replace(/:([^:@]+)@/, ":****@");
console.log(`Attempting to connect to database: ${maskedUrl}`);

main()
    .then(() => {
        console.log("connected to db");
        app.listen(8080, () => {
            console.log("app.listening on port 8080");
        });
    })
    .catch((err) => {
        console.log("------------------------------------------");
        console.log("DATABASE CONNECTION FAILED:");
        console.log(err.message);
        console.log("------------------------------------------");
    });

async function main() {
    await mongoose.connect(dburl,
         {
        dbName: 'wanderLust',
        serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
        socketTimeoutMS: 45000,
    }
);
}

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "/public")));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);

const store = MongoStore.create({
    mongoUrl: dburl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("ERROR in MONGO SESSION STORE", err)
})

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

app.get("/", (req, res) => {
    res.redirect("/listings");
});

app.use("/listings", ListingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);

app.use((req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

app.use((err, req, res, next) => {
    console.log("ERROR CAUGHT IN APP.JS:");
    console.log(err);
    let { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("listings/error.ejs", { message });
});