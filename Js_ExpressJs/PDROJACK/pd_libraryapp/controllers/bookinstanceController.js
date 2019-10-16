var BookInstance = require('../models/bookinstance');
var {body, validationResult} = require('express-validator/check');
var {sanitizeBody} = require('express-validator/filter');
var Book =require('../models/book');

// Display list of all BookInstances.
exports.bookinstance_list = function(req, res, next) {
    BookInstance.find()
    .populate('book')
    .exec(function(err, list_bookinstances){
        if(err){return next(err);}
        //Successful render
        res.render('bookinstance_list', {title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });
};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance detail: ' + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function(req, res, next) {
    Book.find({}, 'title')
    .exec(function(err,books){
        if(err){return next(err);}

        res.render('bookinstance_form',{title: 'Create BookInstance', book_list: books});
    })    
};  

// Handle BookInstance create on POST.
exports.bookinstance_create_post = [
    body('book','book name is required').isLength({min: 1}).trim(),
    body('imprints','imprint is required').isLength({min: 1}).trim(),
    body('due_back','Invalid date').optional({checkFalsy: true}).isISO8601(),

    //Sanitize body
    sanitizeBody('book').trim().escape(),
    sanitizeBody('imprints').trim().escape(),
    sanitizeBody('status').trim().escape(),
    sanitizeBody('due_back').toDate(),

    //Validate results
    (req, res ,next) => {
        //Extract validation errors from request
        const errors = validationResult(req);
        
        //Create a bookinstance
        var bookinstance = new BookInstance({
           book: req.body.book,
           imprints: req.body.imprints,
           due_back: req.body.due_back,
           status: req.body.status 
        });

        //Rendering page or showing errors
        if(!errors.isEmport()){
            Book.find({},'title')
            .exec(function(err, books){
                if(err){return next(err)}
                //render form
                res.render('bookinstance_form',{title: 'Create bookinstance form', book_list: books, selected_book: bookinstance.book._id,errors: errors.array(), bookinstance:bookinstance})
            });
            return;
        } else {
                //Data form is invalid
                bookinstance.save(function(err){
                    if(err){ return next(err);}
                    //Successful -redirect to new record
                    res.redirect('bookinstance.url');

                });
        }
    }
];

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete GET');
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance delete POST');
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update GET');
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: BookInstance update POST');
};