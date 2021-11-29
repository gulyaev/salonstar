const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');
const bodyParser = require('body-parser');


// /api/posts/createpost
//create a post
router.post ('/createpost', async (req, res) => {
  const newPost = new Posts(req.body);

  try {
    const post = await newPost.save();
    if (!post) throw Error('Something went wrong while saving the post');

    res.status(200).json(post);
  } catch(err ) {
    res.status(400).json({msg: err});
  }

  //res.send('Let!s create post!');
});

// /api/posts/getposts
//get all posts
router.get ('/getposts', async (req, res) => {
  try {
    const posts = await Posts.find();
    if (!posts) throw Error('No items');
    
    res.status(200).json(posts);
    
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});

// /api/posts/deletepost
//delete a post
router.delete ('/deletepost/:id', async (req, res) => {
  try {
    const post = await Posts.findByIdAndDelete(req.params.id);
    if (!post) throw Error('No post found');
    res.status(200).json({success: true});
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});

// /api/posts/getposts/:id
//get a post
router.get ('/getposts/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    if (!post ) throw Error('No items');
    
    res.status(200).json(post);
    
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});



// /api/posts/updatepost/:id
// update a post
router.patch ('/updatepost/:id', async (req, res) => {
  try {
    console.log("hello")
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body);
    if (!post) throw Error('Something went wrong while updating the post');
    res.status(200).json({success: true});
    
  } catch(err ) {
    res.status(400).json({msg: err});
  }
});

module.exports = router;