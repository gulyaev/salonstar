const express = require('express');
const router = express.Router();
const config = require('config');
const shortid = require('shortid');
const Links = require('../models/Links');
const auth = require('../middleware/auth.middleware');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

router.get('/:code', async(req, res)=>{
    try {
        const link = await Links.findOne({code: req.params.code});
        if (link) {
            link.clicks++;
            await link.save();
            return res.redirect(link.from);
        }
        res.status(404).json('Ссылка не найдена');
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
});

module.exports = router;