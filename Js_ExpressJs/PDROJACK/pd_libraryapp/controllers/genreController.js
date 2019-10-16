var Genre = require('../models/genre');
const{body,validationResult}=require('express-validator/check');
const{sanitizeBody}=require('express-validator/filter');


// Display list of all Genre.
exports.genre_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre list');
};

// Display detail page for a specific Genre.
exports.genre_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre detail: ' + req.params.id);
};

// Display Genre create form on GET.
exports.genre_create_get = function(req, res, next) {
    res.render('genre_form', {title: 'Create Genre'});
};

// Handle Genre create on POST.
exports.genre_create_post = [
    //validate name field is npot empty
    body('name', 'genre name required').isLength({min: 1}).trim(),

    //sanitize trim and escape the name field
    sanitizeBody('name').trim().escape(),

    //process requests after validation and sanitization
    (req,res,next) => {
        //Extract the validation errors from a request.
        const errors = validationResult(req);

        //create a genre object with escaped and trimmed data
        var genre = new Genre(
            {name: req.body.name}
        );

        if(!errors.isEmpty()){
            //There are errors. Render the form again with sanitized values/error messages
            res.render('genre_form', {title: 'Create Genre', genre: genre,errors: errors.array()});
        return;
        }
        else{
            //Data is valid
            //Check if Genre with same name already exists.
            Genre.findOne({'name': req.body.name})
            .exec(function(err, found_genre){
                if(err){return next(err);}
                
                if (found_genre){
                    //Genre exist redirect to its detail page
                    re.redirect(found_genre.url);
                }
                else{
                    genre.save(function(err){
                        if(err){return next(err);}
                        res.redirect(genre.url);
                    });
                }
            });
        }
    }
]

// Display Genre delete form on GET.
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete GET');
};

// Handle Genre delete on POST.
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre delete POST');
};

// Display Genre update form on GET.
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update GET');
};

// Handle Genre update on POST.
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Genre update POST');
};