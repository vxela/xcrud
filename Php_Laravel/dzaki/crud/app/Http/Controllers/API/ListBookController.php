<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Libraries\ResponseBase;
use App\Models\Book;
use App\Repository\BookRepository;
use Illuminate\Http\Request;

class ListBookController extends Controller
{

    private $book;

    public function __construct(BookRepository $book)
    {
        $this->book = $book;
    }

    public function __invoke()
    {
        try{

            $bookList = $this->book->list();

            $response = [
                'data' => $bookList
            ];

            return ResponseBase::success($response);

        }catch (\Exception $e) {
            return ResponseBase::error(400,$e->getMessage());
        }
    }

}
