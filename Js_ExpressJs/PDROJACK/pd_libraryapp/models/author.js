var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = new Schema(
    {
        first_name:{type: String , required: true, max :180},
        family_name:{type: String , required: false, max :180},
        date_of_birth:{type: Date},
        date_of_death:{type: Date}
    }
);

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function(){
    return this.family_name +', '+this.first_name;
});

//virtual for author's lifespan
AuthorSchema
.virtual('lifespan')
.get(function(){
    return (this.date_of_death.getYear()-this.date_of_birth.getYear()).toString();
});

//virtual for authors url 
AuthorSchema
.virtual('url')
.get(function(){
    return '/catalog/author/'+this._id;
});

//Export model
module.exports = mongoose.model('Author', AuthorSchema);