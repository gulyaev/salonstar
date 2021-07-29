const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const bodyParser = require('body-parser');
const multer = require ('multer');
const mongoose = require('mongoose');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, new Date().toISOString() + file.originalname);
    },
});

const upload = multer ({storage: storage});


// /api/users/getusers
//get all users
router.get ('/getusers', async (req, res) => {
  try {
    const users = await Users.find()
      .select("_id email name userImage")
     .exec()
     /*
     .then(docs=>{
      console.log(docs);
          const response = {
            users: docs.map(doc=>{
              return {
                _id: doc._id,
                name: doc.name,
                userImage: doc.userImage,
                request: {
                  type: "GET",
                  url: "http://127.0.0.1:5000/api/users/getusers" + doc._id
                }
              }
            })
          } 
      });  
     */
    console.log(users);
    if (!users) throw Error('No items');
    
    res.status(200).json(users);
    
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});

// /api/users/getusers/:id
//get a user
router.get ('/getusers/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user ) throw Error('No items');
    
    res.status(200).json(user);
    
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});

// /api/users/createuser
//create a user
router.post ('/createuser', upload.single('userImage'),async (req, res) => {
  console.log('req.file:', req.file);
  const newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    email: req.body.email,
    name: req.body.name,
    userImage: req.file.path
  });

  try {
    const user = await newUser.save();
    if (!user) throw Error('Something went wrong while saving the user');

    res.status(200).json(user);
  } catch(err ) {
    res.status(400).json({msg: err});
  }

  //res.send('Let!s create post!');
});

// /api/users/deleteuser
//delete a user
router.delete ('/deleteuser/:id', async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) throw Error('No post found');
    res.status(200).json({success: true});
    
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});

// /api/users/updateuser/:id
// update a user
router.patch ('/updateuser/:id', async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body);
    if (!user) throw Error('Something went wrong while updating the post');
    res.status(200).json({success: true});
    
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});

module.exports = router;