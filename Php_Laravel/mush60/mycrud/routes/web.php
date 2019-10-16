<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/employee', 'employeeController@index');
Route::get('/employee/list', 'employeeController@index');
Route::get('/employee/show/{id}', 'employeeController@show');
Route::get('/employee/edit/{id}', 'employeeController@edit');
Route::post('/employee/update/{id}', 'employeeController@update');
Route::get('/employee/delete/{id}', 'employeeController@delete');
Route::get('/employee/destroy/{id}', 'employeeController@destroy');
// Route::get('/employee/edit/{{id}}', 'employeeController@edit');