<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductCategoryResource;
use App\Models\ProductCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductCategoryController extends Controller
{


    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = ProductCategory::orderByDesc('id')->paginate($perPage);
            $pages_count = ceil($data->total()/$perPage);
            $labels = [];
            for ($i=1; $i <= $pages_count; $i++){
                (array_push($labels,$i));
            }
            return response([
                "data"=>ProductCategoryResource::collection($data),
                "pages"=>$pages_count,
                "total"=> $data->total(),
                "labels"=> $labels,
            ], 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
    public function indexSite()
    {
        try {
            $data = ProductCategory::orderBy('id')->where('active',1)->get();
            return response(ProductCategoryResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function show(ProductCategory $productCategory)
    {
        try {
            return response(new ProductCategoryResource($productCategory), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:product_categories',
            ],
            [
                'title.required' => 'لطفا عنوان را وارد کنید',
                'title.unique' => 'این عنوان قبلا ثبت شده است',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
            $data = ProductCategory::create($request->except('image'));
            if ($request['image']) {
                $name = 'product_category_' . $data['id'] . '_' . uniqid() . '.png';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/products/');

                $data->update(['image' => '/' . $image_path]);
                (new ImageController)->resizeImage('images/products/',$name);

            }

            return response(new ProductCategoryResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request,ProductCategory $productCategory)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:product_categories,title,' . $productCategory['id'],
            ],
            [
                'title.required' => 'لطفا عنوان را وارد کنید',
                'title.unique' => 'این عنوان قبلا ثبت شده است',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
            $productCategory->update($request->except('image'));
            if ($request['image']) {
                $name = 'product_category_' . $productCategory['id'] . '_' . uniqid() . '.png';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/products/');
                if ($productCategory['image']){
                    $file_to_delete = ltrim($productCategory['image'], $productCategory['image'][0]); //remove '/' from file name start
                    $file_to_delete_thumb = ltrim(str_replace('.png','_thumb.png',$file_to_delete));
                    if (file_exists($file_to_delete)){  unlink($file_to_delete);}
                    if (file_exists($file_to_delete_thumb)){  unlink($file_to_delete_thumb);}
                }

                $productCategory->update(['image' => '/' . $image_path]);

                (new ImageController)->resizeImage('images/products/',$name);



            }

            return response(new ProductCategoryResource($productCategory), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function destroy(Request $request)
    {
        try {
            $data = ProductCategory::where('id',$request['id'])->first();
            $data->Products->each->delete();

            if ($data['image']){
                $file_to_delete = ltrim($data['image'], $data['image'][0]);
                $file_to_delete_thumb = str_replace('.png','_thumb.png',$file_to_delete);
                if (file_exists($file_to_delete)){ unlink($file_to_delete); }
                if (file_exists($file_to_delete_thumb)){ unlink($file_to_delete_thumb); }
            }
            $data->delete();
            return response("category and it's subsets deleted", 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(ProductCategory $productCategory)
    {
        try {
            $productCategory->update(['active' => !$productCategory['active']]);
            return response(new ProductCategoryResource($productCategory), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

}
