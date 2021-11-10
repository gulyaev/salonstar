const { Router } = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const Users = require('../models/Users');
const router = Router();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const requireLogin = require('../middleware/requireLogin');
const express = require('express');


router.get('/protected', requireLogin, async (req, res) => {
  await console.log('req.user2 ', req.user);
  //res.send('req.user ', req.user);
  //res.send("f");
  
  /*
  res.json({
    id: req.user.id,               // you tell typescript that req.user for sure not. null
  });
  */
  
})

router.get('/test', (req, res) => {
  console.log('req.body', req.body);
  res.send("from test");
})

// /api/auth/register
/*
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    //eval(locus);
    const user = new Users({ email: email, password: password });
    
    await user.save();
    res.status(201).json({ message: 'Пользователь создан' });
  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
  }
});
*/

// /api/auth/register
router.post(
  '/register',

  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов')
      .isLength({ min: 6 })
  ],

  async (req, res) => {

    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректный данные при регистрации'
        })
      }

      const {email, login, password, adminCode} = req.body

      const candidate = await Users.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'Такой пользователь уже существует' })
      }

      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new Users({ email: email, login: login, password: hashedPassword, adminCode: adminCode });
      
      if (req.body.adminCode === 'secretcode123') {
        user.isAdmin = true;
      }
      
      await user.save();

      const token = jwt.sign(
        { userId: user.id,
          email: user.email,
          login: user.login 
        },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      );

      res.status(201).json({ message: 'Пользователь создан', currentUser: user.isAdmin, token: token, userId: user.id, userEmail: user.email, userLogin: user.login, isAuth: true });

    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  });

// /api/auth/login
router.post(
  '/login',
  [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему'
        });
      }

      const { email, login, password, adminCode } = req.body;

      const user = await Users.findOne({ email: email });

      if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден' });
      }


      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль. Попробуйте снова' });
      }

      const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      );

      res.json({ token, userId: user.id, userEmail: user.email, userLogin: user.login, message: 'Вход осуществлен' });
      //res.status(201).json({ message: 'Вход осуществлен' })

    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
  });

// /api/auth/me
router.post('/me', async (req, res) => {
  try {
    const { userId } = req.body;
    console.log('req.body1', req.body);

    const user = await Users.findOne({ _id: userId });

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    res.json({ userId: user.id, userEmail: user.email, userLogin: user.login, message: 'Вы авторизованы в системе', isAdmin: user.isAdmin, isAuth: true });

  } catch (e) {
    res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
  }
});

module.exports = router;