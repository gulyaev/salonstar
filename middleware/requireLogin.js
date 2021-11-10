const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
const User = mongoose.model("Users");

module.exports = (req, res, next) => {
    const {authorization} = req.headers;
    //authorization === Bearer sdfsdfsadf
    if (!authorization) {
        return res.status(401).json({error:"Вы должны быть авторизованы"});
    }
    const token = authorization.replace("Bearer ", "");//достаем jwt_webtoken
    jwt.verify(token, config.get('jwtSecret'), (err, payload)=>{
        if(err){
            return res.status(401).json({error: "!вы должны быть авторизованы"});
        }

        const {userId} = payload;
        //console.log('userId ' + userId);
        User.findById(userId).then(userdata => {
            //console.log('userdata1 ' + userdata);
            req.user = userdata;
            //console.log('req.user ' + req.user);
            /*
            res.json({
                id: req.user.id,               // you tell typescript that req.user for sure not. null
            });
            */
            next()
        })
        
    })
}