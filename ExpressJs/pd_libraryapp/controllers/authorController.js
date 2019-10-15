var Author = require('../models/author');
const{body,validationResult}=require('express-validator/check');
const{sanitizeBody}=require('express-validator/filter');


exports.author_list = function(req, res){
     Author.find({}, 'title author')
     .populate('author')
     .exec(function(err, list_author){
         if (err) return next(err);
        //successful , so render
        res.render('list_author',{title: 'Author list', author_list: 'list_author'});        
    })
};

//Display detail page for a specific author
exports.author_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Author detail: '+req.params.id);
};

//Display Author create form on GET
exports.author_create_get = function(req, res, next){
    res.render('author_form', {title: 'Author Form'});
};

//Handle Author create form on POST
exports.author_create_post = [
    body('first_name').isLength({min: 1}).trim().withMessage("First name is required").isAlphanumeric().withMessage("First name cant be alphanumeric"),
    body('family_name').isLength({min: 1}).trim().withMessage("last name is required").isAlphanumeric().withMessage("Last name cant be alphanumeric"),
    body('date_of_birth', 'Invalid DOB').optional({checkFalsy:true}).isISO8601(),
    body('date_of_death','invalid DOD').optional({checkFalsy: true}).isISO8601(),

    //Sanitizing body
    sanitizeBody('first_name').trim().escape(),
    sanitizeBody('family_name').trim().escape(),
    sanitizeBody('date_of_birth').toDate(),
    sanitizeBody('date_of_death').toDate(),

    //Create a author object
    (req,res,next)=>{
        //Extract the validation error from request
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            res.render('author_form',{title: 'Create Author Form',author: req.body, errors: errors.array() });
        } else {
            var author = new Author(
                {first_name: req.body.first_name,
                family_name: req.body.family_name,
                date_of_birth: req.body.date_of_birth,
                date_of_birth: req.body.date_of_death,
               });

            author.save(function(err){
                if(err){return next(err);}
                res.redirect(author.url);
            });
        }
        }       
]

//Display Author delete form on GET
exports.author_delete_get = function(req, res){
    res.send('NOT IMPLEMENTED: Author delete GET');
}; 

//Handle Author delete on POST
exports.author_delete_post= function(req,res){
    res.send('Not IMPLEMENTED: Author delete POST');
};

//Display Author update form GET
exports.author_update_get= function(req,res){
    res.send('Not implemented : Author update GET');
};

//Display Author update form POST
exports.author_update_post=function(req,res){
    res.send('Not implemented: Author update POST');
};