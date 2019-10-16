<?php
/**
 * Created by PhpStorm.
 * User: trust2
 * Date: 16/10/19
 * Time: 14.54
 */

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Book extends Model
{

    use SoftDeletes;

    protected $table = 'book';

    protected $fillable = ['*'];

    protected $hidden = ['updated_at','deleted_at'];

    public $timestamps = true;

}
