const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Types} = require('mongoose');

const ProfileinfoSchema = new Schema({
    sex: {type: String, required: true},
    //age: {type: Number, required: true},
    city: {type: String, required: true},
    about: {type: String, required: false},
    personalinfo: {type: String, required: false}, 
    interests: {type: String, required: false},
    
    /*
    area: {type: String, required: true},
    vacancy: {type: String, required: true},
    experience: {type: Number, required: true},
    education: {type: String, required: true},
    personalinfo: {type: String, required: true},
    

    tel: {type: String, required: true, unique: true},
    photo: {type: String, required: true, unique: true},
    */

    owner: {type: Types.ObjectId, ref: 'Users'}
});

module.exports = mongoose.model('Profileinfo', ProfileinfoSchema);
