const express = require('express');
const router = express.Router();
const User = require('../modal/userSchema')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const fs = require('fs');
var path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null,'./uploads');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({storage: storage, limits: {
  fileSize: 1024 * 1024 *2
}});

/* GET users listing.*/
router.post('/createuser', upload.single('userImage') ,function (req, res, next) {
  console.log("line13", req.file);
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    // Now we can store the password hash in db.
    var user = new User({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      password: hash,
      img: req.file.path
    });
    // Save the new model instance, passing a callback
    user.save(function (err) {
      // if (err) return handleError(err);
      if (err) {
        console.log("error aaya hai", err);
      }
      console.log("Saved , Thanks god");
      res.send('you are so cool!!!!!');
    });
  });
});

router.put('/updateuser', function(req, res) {
 User.findByIdAndUpdate(req.body._id, {"name": req.body.name}, function(err, res){
   if(err){
     console.log("error", err);
   } else {
     console.log("line34", res);
   }
 });
 res.send("Updated data");
});

module.exports = router;
