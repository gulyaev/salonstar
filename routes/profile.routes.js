const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post('/test', (req, res) => {
  console.log( 'req.body', req.body );
  res.status(200).json({message:"Successfully Sended"});
  //console.log(res);
  //res.send('Okh');
})

router.get('/profile/:id', async (req, res) => {
  //console.log('req.body', req.body);
  try {
    //const user = await Users.findById(req.params.id);
    //res.render("users/show", {user: foundUser});
    
    //if (!user) throw Error('No items');
    //res.status(200).json(user);

    const user = await Users.findById(req.params.id);
    if (!user ) throw Error('No items');
    //res.send('Okh');  
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// /api/users/getusers
//get all users
/*
router.get('/profile/', async (req, res) => {
  try { 
    const users = await Users.find()
      .select("_id name userImage")
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
    

  } catch (err) {
    res.status(400).json({ msg: err });
  }
});
*/

// /api/users/getusers/:id
//get a user
//USER PROFILE
router.get('/profile/:id', async (req, res) => {
  //console.log('req.body', req.body);
  try {
    //const user = await Users.findById(req.params.id);
    //res.render("users/show", {user: foundUser});
    
    //if (!user) throw Error('No items');
    //res.status(200).json(user);

    const user = await Users.findById(req.params.id);
    if (!user ) throw Error('No items');
    res.send('Okh');  
    //res.status(200).json(user);

      
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;