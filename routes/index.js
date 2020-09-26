const express = require('express');
const passport = require('passport');
const router = express.Router();
const {
  ensureAuthenticated,
  forwardAuthenticated
} = require('../config/auth');
const user = require('../models/user');
const huser = require('../models/huser');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('index'));

// Dashboard
router.get('/dashboard', ensureAuthenticated, (req, res) =>
  res.render('dashboard', {

    
    user:req.user,
    pet: req.user.pet
  })
);


router.get("/auth/google",
  passport.authenticate('google', { scope: ["email", " profile"] })
);

router.get("/auth/google/middle",
  passport.authenticate('google', { failureRedirect: "/login" }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect("/dashboard");
  });



router.post('/search', forwardAuthenticated, (req, res) => {
  huser.find({
    city: req.body.city
  }).then(hosteldata => {
    if (!hosteldata) {
      console.log("no city found")
    } else {
      hosteldata.forEach(console.log)
      // city.forEach(console.log;
      res.render('search_results',{
        hosteldata:hosteldata
      })

    }


  }).catch(err => console.log(err));
});







module.exports = router;
