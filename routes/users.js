var express = require('express');
var router = express.Router();
var User = require('../modal/userSchema')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // Create an instance of model SomeModel
var awesome_instance = new User({ name: 'awesome' });

// Save the new model instance, passing a callback

awesome_instance.save(function (err) {
  // if (err) return handleError(err);
  if(err){
    console.log("error aaya hai", err);
  }
  console.log("Saved , Thanks god");
  res.send('you are so cool!!!!!');
});
});

module.exports = router;
