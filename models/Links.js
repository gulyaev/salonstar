const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {Types} = require('mongoose');

const LinkSchema = new Schema({
    from: {type: String, required: true},
    to: {type: String, required: true, unique: true},
    code: {type: String, required: true, unique: true},
    date: {type: Date, default: Date.now},
    clicks: {type: Number, default: 0},
    owner: {type: Types.ObjectId, ref: 'Users'}
});

module.exports = mongoose.model('Links', LinkSchema);
