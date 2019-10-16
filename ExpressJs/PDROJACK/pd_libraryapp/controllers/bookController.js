var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
const{body,validationResult}=require('express-validator/check');
const{sanitizeBody}=require('express-validator/filter');

var async = require('async');
//
exports.index = function(req, res) {
   async.parallel({
       book_count: function(callback){
           Book.countDocuments({}, callback);
       },
       book_instance_count: function(callback){
           BookInstance.countDocuments({},callback);
       },
       book_instance_available_count: function(callback){
           BookInstance.countDocuments({status: 'Available'}, callback);
       },
       author_count: function(callback){
           Author.countDocuments({},callback);
       },
       genre_count: function(callback){
            Genre.countDocuments({},callback);
       }
   }, function(err,results){
       res.render('index',{title: 'Local Library Home', error: err,data: results});
   })
};

//Display Book list
exports.book_list= function(req,res,next){
   Book.find({},'title author')
   .populate('author')
   .exec(function(err,list_books){
       if (err) { return next(err);}
       //successful, so render
       res.render('book_list',{title: 'Book List', book_list: list_books});
   })
};

//BOOK details
exports.book_details= function(req,res){
    res.send("Not implemented yet: displays book details"+ req.params.id);
};

//Display book create form on GET
exports.book_create_get=function(req,res,next){
    //get author and books used for this
    async.parallel({
        authors: function(callback){
            Author.find(callback);
        },
        genres: function(callback){
            Genre.find(callback);
        },
    }, function(err, results){
        if(err){ return next(err);}
        res.render('book_form',{title: 'create book form', authors: results.authors, genres: results.genres});
    });
};


//Handle book create form on POST 
exports.book_create_post = [
    //convert genre to array
    (req,res,next)=>{
        if(!(req.body.genre instanceof Array)){
            if(typeof req.body.genre==='undefined')
            req.body.genre=[];
            else
            req.body.genre=new Array(req.body.genre);
        }
        next();
    },

    //validating fields
    body('title','title is required').isLength({min: 1}).trim(),
    body('author','author name is required').isLength({min:1}).trim(),
    body('summary','summary is required').isLength({min: 1}).trim(),
    body('ISBN','isbn is required').isLength({min: 1}).isISBN().trim(),
    

    //sanitize body for 
    sanitizeBody('*').trim().escape(),
    
    //Process request after validation anfd sanitization.
    (req, res, next)=>{
        const errors = validationResult(req);

        var book = new Book({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary,
            ISBN: req.body.ISBN,
            genre:req.body.genre,
        });
        
        if(!errors.isEmpty()){
            //There are no errors. Render form again with sanitized value/error messages.

            //Get all authors and genres for form.
            async.parallel({
                authors: function(callback){
                    Author.find(callback);
                },
                genres: function(callback){
                    Genre.find(callback);
                }
            }, function(err, results){
                if(err){return next(err);}
                
                //Mark selecterd genre as checked
                for(let i=0;i<results.genres.length; i++){
                    if(book.genre.indexOf(results.genre[i]._id)>-1){
                        results.genre[i].checked='true';
                    }
                }
                book.save()
                .then(()=>res.render('book_form',{title: 'Create Book', authors:results.authors, genres:results.genres, book: book, errors: errors.array()})); 
            });
        }

    }
    
]


//Display book delete form on GET
exports.book_delete_get=function(req,res){
    res.send("Not implemented: book delete get");
};


//Handle book delete form on POST
exports.book_delete_post = function(req,res){
    res.send("Not implemented: book delete post");
};

//Handle book update form on GET
exports.book_update_get = function(req,res){
    res.send("Not implemented: book update get");
};

//Handle book update form on POST
exports.book_update_post = function(req,res){
    res.send("Not implemented: book update post");
};