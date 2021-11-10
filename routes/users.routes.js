const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const upload = multer({ storage: storage });


// /api/users/getusers
//get all users
router.get('/getusers', async (req, res) => {
  try {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const users = await Users.find()
      .select("_id email login")
      //.select("_id email name userImage")
      .exec()
      
    const results = {}

    if (endIndex < users.length) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }
    
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
    results.totalCount = users.length;
    results.results = users.slice(startIndex, endIndex);//вывод пользователей в пределах заданного размера порции
     
    console.log(results);
    console.log(users.length);//общее число пользователей
    
    if (!users) throw Error('No items');

    res.status(200).json(results);

  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// /api/users/getusers/:id
//get a user
router.get('/getusers/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    if (!user) throw Error('No items');

    res.status(200).json(user);

  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// /api/users/createuser
//create a user
router.post('/createuser', upload.single('userImage'), async (req, res) => {
  console.log('req.file:', req.file);
  const newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    password: req.body.password,
    email: req.body.email,
    name: req.body.name,
    userImage: req.file.path
  });

  try {
    const user = await newUser.save();
    if (!user) throw Error('Something went wrong while saving the user');

    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }

  //res.send('Let!s create post!');
});

// /api/users/deleteuser
//delete a user
router.delete('/deleteuser/:id', async (req, res) => {
  try {
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) throw Error('No user found');
    res.status(200).json({ success: true });

  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

// /api/users/updateuser/:id
// update a user
router.patch('/updateuser/:id', async (req, res) => {
  try {
    const user = await Users.findByIdAndUpdate(req.params.id, req.body);
    if (!user) throw Error('Something went wrong while updating the post');
    res.status(200).json({ success: true });

  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

/*
router.put('/follow', requireLogin, (req, res) => {
   Users.findByIdAndUpdate(req.body.followId, {
    $push: {followers: req.user._id}
    },{
      new: true
    }, (err, result) => {
      if (err) {
        return res.status(422).json({error: err})
      }
      Users.findByIdAndUpdate(req.user._id, {
        $push: {following: req.body.followId},
      }, {new: true}).then(result => {
        res.json(result)
      }).catch(err=>{
        return res.status(422).json({error: err})
      });
    });
});
*/

router.put('/follow', requireLogin, (req, res) => {
  Users.findByIdAndUpdate(req.user._id, {
   $push: {following: req.body.followId}
   },{
     new: true
   }, (err, result) => {
     if (err) {
       return res.status(422).json({error: err})
     }
     Users.findByIdAndUpdate(req.body.followId, {
       $push: {followers: req.user._id},
     }, {new: true}).select("-password").then(result => {
       res.json(result)
     }).catch(err=>{
       return res.status(422).json({error: err})
     });
   });
});

router.put('/unfollow', requireLogin, async (req, res) => {
  await Users.findByIdAndUpdate(req.body.unfollowId, {
    $pull: {followers: req.user._id}
    },{
      new: true
    }, (err, result) => {
      if (err) {
        return res.status(422).json({error: err})
      }
      Users.findByIdAndUpdate(req.user._id, {
        $pull: {following: req.body.unfollowId},
      }, {new: true}).select("-password").then(result => {
        res.json(result)
      }).catch(err=>{
        return res.status(422).json({error: err})
      });
    }); 
});

module.exports = router;