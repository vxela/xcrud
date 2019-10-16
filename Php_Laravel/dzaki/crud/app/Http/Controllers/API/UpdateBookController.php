<?php


namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Libraries\ResponseBase;
use App\Repository\BookRepository;
use Illuminate\Http\Request;

class UpdateBookController extends Controller
{

    private $book;

    public function __construct(BookRepository $book)
    {
        $this->book = $book;
    }

    public function __invoke(Request $request,$id)
    {
        try{

            $bookUpdate = $this->book->update($request,$id);

            $response = [
                'data' => $bookUpdate
            ];

            return ResponseBase::success($response);

        }catch (\Exception $e) {
            return ResponseBase::error(400,$e->getMessage());
        }

    }

}

