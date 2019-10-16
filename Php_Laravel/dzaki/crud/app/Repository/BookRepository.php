<?php
/**
 * Created by PhpStorm.
 * User: trust2
 * Date: 16/10/19
 * Time: 15.02
 */

namespace App\Repository;


use App\Models\Book;
use Illuminate\Http\Request;

class BookRepository
{

    public function create(Request $request)
    {

        $book = new Book();
        $book->name = $request->name;
        $book->save();

        return $book;

    }

    public function list()
    {
        return Book::all();
    }

    public function update(Request $request,$id)
    {
        $book = Book::find($id);
        $book->name = $request->name;
        $book->save();

        return $book;
    }

    public function delete($id)
    {
        $book = Book::find($id);
        $book->delete();
    }

}
