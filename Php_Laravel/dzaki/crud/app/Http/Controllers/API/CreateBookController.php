<?php
/**
 * Created by PhpStorm.
 * User: trust2
 * Date: 16/10/19
 * Time: 14.52
 */

namespace App\Http\Controllers\API;


use App\Http\Controllers\Controller;
use App\Libraries\ResponseBase;
use App\Repository\BookRepository;
use Illuminate\Http\Request;

class CreateBookController extends Controller
{

    private $book;

    public function __construct(BookRepository $book)
    {

        $this->book = $book;

    }

    public function __invoke(Request $request)
    {
        try{
            $bookCreate = $this->book->create($request);

            $response = [
                'data' => $bookCreate
            ];
            return ResponseBase::success($response);
        }catch (\Exception $e) {
            return ResponseBase::error(400,$e->getMessage());
        }
    }

}
