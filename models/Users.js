const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Types} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, required: 'false', unique: 'true'},
    //password: {type: String, required: 'false'},
    name: {type: String, required: 'false'},
    //profession: {type: String, required: 'false'},
    //description: {type: String, required: 'false'},
    //links: [{type: Types.ObjectId, ref:'Link'}]
    userImage: {type: String, required: 'false'}
});

module.exports = mongoose.model('Users', UserSchema);