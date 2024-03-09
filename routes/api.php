<?php

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Route::middleware('auth:admin')->group(function () {
//    Route::get('/panel/admin','currentAdmin');
//    Route::post('/panel/admin/logout','adminLogout');
//});


use App\Http\Controllers\ApiController;
use Illuminate\Support\Facades\Route;
//all
Route::controller(App\Http\Controllers\AuthController::class)->group(function () {
    Route::prefix('panel')->group(function () {
        Route::get('/user', 'currentUser');

        Route::get('/user/logout/{user}', 'logout');

        Route::post('/admin/login', 'login');
        Route::post('/admin/register', 'register');
        Route::post('/check/admin/token', 'updateLastActivity');

        Route::post('/user/login', 'login');
        Route::post('/user/register', 'register');
        Route::post('/check/user/token', 'updateLastActivity');
    });


    Route::post('/user/login', 'login');
    Route::post('/user/register', 'register');
    Route::post('/check/user/token', 'updateLastActivity');
    Route::get('/user/logout/{user}', 'logout');
    Route::post('/user/logout', 'logout');

    Route::post('/otp/mobile', 'getOtp');
    Route::post('/mobile/login', 'loginMobile');
});
Route::controller(App\Http\Controllers\UserController::class)->group(function () {

    Route::post('/update/user', 'updateProfile');
    Route::get('/user', 'indexUsers');
    Route::get('/admins', 'indexAdmins');
    Route::get('/user/{user}', 'show');
    Route::post('/user', 'store');
    Route::post('/user/{user}', 'update');
    Route::get('/delete/user/{user}', 'destroy');


    Route::get('/get/otp/{mobile}', 'getOtpNoRedis');//getOtp
    Route::post('/verify/otp', 'verifyOtp');
    Route::get('/login/otp/{user}', 'loginOtp');

    Route::get('/otp1', 'otp1');
    Route::get('/otp2', 'otp2');


    Route::prefix('panel')->group(function () {

        Route::post('/update/user', 'updateProfile');
        Route::get('/user', 'indexUsers');
        Route::get('/user/{user}', 'show');
        Route::post('/user', 'store');
        Route::post('/user/{user}', 'update');
        Route::post('/delete/user', 'destroy');

        Route::post('/update/admin', 'updateProfile');
        Route::get('/admin', 'indexAdmins');
        Route::get('/admin/{admin}', 'show');
        Route::post('/admin', 'store');
        Route::post('/admin/{admin}', 'update');
        Route::get('/delete/admin/{admin}', 'destroy');
    });
});
Route::controller(App\Http\Controllers\UserAddressController::class)->group(function () {

    Route::get('/address/user', 'index');
    Route::get('/address/user/{userAddress}', 'show');
    Route::post('/address/user', 'store');
    Route::post('/address/user/{clientAddress}', 'update');
    Route::post('/delete/address/user', 'destroy');

});
Route::controller(App\Http\Controllers\ArticleController::class)->group(function () {

    Route::get('/article', 'indexSite');
    Route::get('/article/{article}', 'show');
    Route::get('/latest/article', 'latestSite');
    Route::get('/article/by/category/{id}', 'byCat');

    Route::prefix('panel')->group(function () {

        Route::get('/article', 'index');
        Route::get('/article/{article}', 'show');
        Route::post('/article', 'store');
        Route::post('/article/{article}', 'update');
        Route::get('/delete/article/{id}', 'destroy');

        Route::get('/active/article/{article}', 'activeToggle');
        Route::get('/latest/article', 'latest');
    });
});
Route::controller(App\Http\Controllers\ArticleCategoryController::class)->group(function () {


    Route::prefix('panel')->group(function () {
        Route::get('/category/article', 'index');
        Route::get('/category/article/{articleCategory}', 'show');
        Route::post('/category/article', 'store');
        Route::post('/category/article/{articleCategory}', 'update');
        Route::post('/delete/category/article', 'destroy');
        Route::get('/active/category/article/{articleCategory}', 'activeToggle');
    });
});

Route::controller(App\Http\Controllers\BlogController::class)->group(function () {

    Route::get('/blog', 'indexSite');
    Route::get('/blog/{blog}', 'show');
    Route::get('/latest/blog', 'latestSite');
    Route::get('/article/by/blog/{id}', 'byCat');

    Route::prefix('panel')->group(function () {

        Route::get('/blog', 'index');
        Route::get('/blog/{blog}', 'show');
        Route::post('/blog', 'store');
        Route::post('/blog/{blog}', 'update');
        Route::get('/delete/blog/{id}', 'destroy');

        Route::get('/active/blog/{blog}', 'activeToggle');
        Route::get('/latest/blog', 'latest');
    });
});
Route::controller(App\Http\Controllers\TeaserController::class)->group(function () {

    Route::get('/teaser', 'indexSite');
    Route::get('/teaser/{teaser}', 'show');
    Route::get('/latest/teaser', 'latestSite');

    Route::prefix('panel')->group(function () {
        Route::get('/teaser', 'index');
        Route::get('/teaser/{teaser}', 'show');
        Route::post('/teaser', 'store');
        Route::post('/teaser/{teaser}', 'update');
        Route::get('/delete/teaser/{id}', 'destroy');

        Route::get('/active/teaser/{teaser}', 'activeToggle');
        Route::get('/latest/teaser', 'latest');
    });
});
Route::controller(App\Http\Controllers\BlogCategoryController::class)->group(function () {

    Route::get('/category/blog', 'indexSite');
    Route::get('/category/blog/{blogCategory}', 'show');

    Route::prefix('panel')->group(function () {
        Route::get('/category/blog', 'index');
        Route::get('/category/blog/{blogCategory}', 'show');
        Route::post('/category/blog', 'store');
        Route::post('/category/blog/{blogCategory}', 'update');
        Route::post('/delete/category/blog', 'destroy');
        Route::get('/active/category/blog/{blogCategory}', 'activeToggle');
    });
});


Route::controller(App\Http\Controllers\SlideController::class)->group(function () {

    Route::get('/slide', 'indexSite');
    Route::prefix('panel')->group(function () {
        Route::get('/slide', 'index');
        Route::get('/slide/{slide}', 'show');
        Route::post('/slide', 'store');
        Route::post('/slide/{slide}', 'update');
        Route::post('/delete/slide', 'destroy');
        Route::get('/active/slide/{slide}', 'activeToggle');
    });
});

Route::controller(App\Http\Controllers\ImageController::class)->group(function () {

    Route::prefix('panel')->group(function () {
//        Route::get('/icon', 'index');
//        Route::get('/icon/{icon}', 'show');
//        Route::post('/icon', 'store');
        Route::post('/icon', 'makeIconPack');
        Route::post('/upload/editor/image', 'uploadEditorImage');
//        Route::post('/panel/upload/editor/image',[\App\Http\Controllers\ImageController::class, 'uploadEditorImage']);

    });
});
//shop
Route::controller(App\Http\Controllers\ProductController::class)->group(function () {

    Route::get('/product', 'indexSite');
    Route::get('/product/{product}', 'show');
    Route::get('/latest/product', 'latestSite');
    Route::get('/stock/product', 'stockSite');
    Route::get('/sizes/product/{id}/{color}', 'getSizes');
    Route::get('/product/by/category/{id}', 'byCat');


    Route::prefix('panel')->group(function () {

        Route::get('/product', 'index');
        Route::get('/product/{product}', 'show');
        Route::post('/product', 'store');
        Route::post('/product/{product}', 'update');
        Route::post('/sort/product/{product}', 'sort');
        Route::get('/delete/product/{product}', 'destroy');

        Route::get('/active/product/{product}', 'activeToggle');
        Route::get('/latest/product', 'latest');

        Route::post('/images/reorder/product/{product}', 'updateOrder');
        Route::get('/product/by/category/{id}', 'byCatPanel');

    });
});
Route::controller(App\Http\Controllers\ProductCategoryController::class)->group(function () {

    Route::get('/category/product', 'indexSite');
    Route::get('/category/product/{productCategory}', 'show');

    Route::prefix('panel')->group(function () {
        Route::get('/category/product', 'index');
        Route::get('/category/product/{productCategory}', 'show');
        Route::post('/category/product', 'store');
        Route::post('/category/product/{productCategory}', 'update');
        Route::post('/delete/category/product', 'destroy');
        Route::get('/active/category/product/{productCategory}', 'activeToggle');
    });
});
Route::controller(App\Http\Controllers\OrderController::class)->group(function () {

    Route::get('/order', 'index');
    Route::get('/order/{order}', 'show');
    Route::post('/order', 'store');
    Route::post('/order/{order}', 'update');
    Route::post('/delete/order', 'destroy');

    Route::post('/pay/order/{order}', 'userToGateway');
    Route::get('/verify/order/{order}', 'verify');
    Route::post('/confirm/order/{order}', 'confirm');

    Route::post('/remove/order/item/{orderItem}', 'removeItem');

    Route::post('/cancel/order', 'cancelByUser');
    Route::get('/userOrders/{user}', 'userOrders');

    Route::get('/cart/{user}', 'cart');
    Route::post('/item/quantity/update', 'updateItemQuantity');
    Route::post('/item/remove', 'removeItem');

    Route::prefix('panel')->group(function () {
        Route::get('/order', 'index');
        Route::get('/order/{order}', 'showPanel');
        Route::post('/order', 'store');
        Route::post('/order/{order}', 'update');
        Route::post('/delete/order', 'destroy');

    });
});
Route::controller(App\Http\Controllers\FinanceController::class)->group(function () {

    Route::prefix('panel')->group(function () {
        Route::get('/finance', 'index');
        Route::get('/finance/{finance}', 'show');
        Route::post('/finance', 'store');
        Route::post('/finance/{finance}', 'update');
        Route::post('/delete/finance', 'destroy');
//    Route::get('/active/finance/{finance}','activeToggle');

    });
});
Route::controller(App\Http\Controllers\FoodSlideController::class)->group(function () {

    Route::prefix('panel')->group(function () {
        Route::get('/foodSlide', 'index');
        Route::get('/foodSlide/{foodSlide}', 'show');
        Route::post('/foodSlide', 'store');
        Route::post('/foodSlide/{foodSlide}', 'update');
        Route::get('/delete/foodSlide/{foodSlide}', 'destroy');
        Route::get('/active/foodSlide/{foodSlide}','activeToggle');

    });
});
//office



//Route::post('/panel/upload/editor/image',[\App\Http\Controllers\ImageController::class, 'uploadEditorImage']);


//other API'S

//food api
Route::get('/category/article', [\App\Http\Controllers\ArticleCategoryController::class,'indexSite']);
Route::get('/category/product', [\App\Http\Controllers\ProductCategoryController::class,'indexSite']);
Route::get('/food/slides', [\App\Http\Controllers\FoodSlideController::class,'indexSite']);


Route::get('/search', [\App\Http\Controllers\SearchController::class,'search']);
Route::get('/fix', [\App\Http\Controllers\ProductController::class,'fix']);

