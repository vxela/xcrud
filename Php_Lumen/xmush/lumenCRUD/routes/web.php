<?php

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/key', function () use ($router) {
    return response()->json(['key' => Str::random(32), 'pass' => Hash::make('qwe123')], 404);
});


$router->get('/', function () use ($router) {
    return $router->app->version();
});
