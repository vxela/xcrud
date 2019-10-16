<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Libraries\ResponseBase;
use App\Repository\BookRepository;

class DeleteBookController extends Controller
{

    private $book;

    public function __construct(BookRepository $book)
    {
        $this->book = $book;
    }

    public function __invoke($id)
    {
        $bookDelete = $this->book->delete($id);

        $response = [
            'message' => 'success deleted'
        ];

        return ResponseBase::success($response);

    }

}
