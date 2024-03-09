<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Http\Resources\ProductResource;
use App\Models\Article;
use App\Models\Product;
use Illuminate\Http\Request;
use Lcobucci\JWT\Exception;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        try {
            if ($request['term'] != ''){
                $data = Product::where('title',  'Like', '%' . $request['term'] . '%')->where('active',1)->get();
                return response(ProductResource::collection($data), 200);
            }else{
                return response([], 200);
            }
        }catch (Exception $exception){
            return response($exception);
        }
    }
}
