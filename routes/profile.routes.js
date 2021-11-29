const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const Profileinfo = require('../models/Profileinfo');
const bodyParser = require('body-parser');
const multer = require('multer');
const mongoose = require('mongoose');
const auth = require('../middleware/auth.middleware');
const requireLogin = require('../middleware/requireLogin');

const { ObjectId } = require('mongodb');
const _id = ObjectId("4eb6e7e7e9b7f4194e000001");

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
  console.log('req.body', req.body);
  //res.status(200).json({message:"Successfully Sended"});
  //console.log(res);
  res.send('Okh');
})

// /api/users/getusers/:id
//get a user
//USER PROFILE My

router.get('/profile/:id', async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    console.log('req.body-profile-routes', user);
    //if (!user) throw Error('No items');
    //res.send('Okh');  
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

router.post('/generateprofileinfo', requireLogin, async (req, res) => {
  try {

    const { sex, city, about, personalinfo, interests } = req.body

    const profileinfo = new Profileinfo({ sex: sex, city: city, about: about, personalinfo: personalinfo, interests: interests, owner: req.user._id });

    await profileinfo.save();

    res.status(201).json({ message: 'Резюме создано', sex: profileinfo.sex, city: profileinfo.city, about: profileinfo.about, personalinfo: profileinfo.personalinfo, interests: profileinfo.interests, owner: profileinfo.owner });

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
});

//роут по которому достаем резюме из коллекции резюме по привязаному пользователю
router.get('/getprofileinfo', auth, async (req, res) => {
  try {
    const profileinfo = await Profileinfo.find({ owner: req.user.userId });
    res.status(200).json(profileinfo);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//роут по которому достаем резюме из коллекции резюме по id пользователя
router.get('/getprofileinfo/:id', async (req, res) => {
  try {
    const profileinfo = await Profileinfo.find({ owner: req.params.id });
    console.log('resumeByIdData', profileinfo);
    res.status(200).json(profileinfo);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

//роут по которому обновляем резюме в коллекции резюме по id пользователя
router.patch('/updateprofileinfo/:id', async (req, res) => {
  try {
    console.log('updatedResumeData3');
    const profileinfo = await Profileinfo.findOneAndUpdate({ owner: req.params.id }, req.body, { new: true });
    //const profileinfo = await Profileinfo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!profileinfo) throw Error('Something went wrong while updating the profileinfo');
    console.log('updatedResumeData', profileinfo);
    //res.status(200).json({success: true});
    res.send('Okh');
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;