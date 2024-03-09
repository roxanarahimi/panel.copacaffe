<?php

use Illuminate\Support\Facades\Route;

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
//Route::get('/panel', function () {
//    return view('panel');
//});
//Route::get('/panel/{any}', function () {
//    return view('panel');
//})->where('any', '.*');
//
//Route::get('/{any}', function () {
//    return view('site');
//})->where('any', '.*');
//
Route::get('{any}', function () {
    return view('panel'); //main
})->where('any', '.*');

