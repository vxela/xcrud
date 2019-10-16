var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema({
    name:{type:String, required: true,min: 3, max: 180}
});

//Virtrual Urls
GenreSchema
.virtual('url')
.get(function(){
    return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);