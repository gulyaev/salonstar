const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Types} = require('mongoose');

const UserSchema = new Schema({
    //name: {type: String, required: 'false', unique: 'false'},
    email: {type: String, required: 'false', unique: 'true'},
    login: {type: String, required: 'false', unique: 'true'},
    password: {type: String, required: 'false'},
    isAdmin: {type: Boolean, default: false},
    adminCode: {type: String, required: false},
    followers: [{type: Types.ObjectId, ref: 'Users'}],
    following: [{type: Types.ObjectId, ref: 'Users'}],
    profileinfo: [{type: Types.ObjectId, ref:'Profileinfo'}],
    //followed: {type: Boolean, default: false}
    //name: {type: String, required: 'false'},
    //profession: {type: String, required: 'false'},
    //description: {type: String, required: 'false'},
    //links: [{type: Types.ObjectId, ref:'Links'}],
    //userImage: {type: String, required: 'false'},
    //avatar: {type: String, required: 'false'}
});

module.exports = mongoose.model('Users', UserSchema);