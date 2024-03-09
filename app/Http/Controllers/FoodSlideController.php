<?php

namespace App\Http\Controllers;

use App\Http\Resources\FoodSlideResource;
use App\Models\FoodSlide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FoodSlideController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = FoodSlide::orderByDesc('id')->paginate($perPage);
            $pages_count = ceil($data->total() / $perPage);
            $labels = [];
            for ($i = 1; $i <= $pages_count; $i++) {
                (array_push($labels, $i));
            }
            return response([
                "data" => FoodSlideResource::collection($data),
                "pages" => $pages_count,
                "total" => $data->total(),
                "labels" => $labels,
                "title" => 'رسپی های صفحه اصلی',
                "tooltip_new" => 'انتخاب رسپی جدید',

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
    public function indexSite(Request $request)
    {

        try {
            $data = FoodSlide::orderByDesc('id')->where('active',1)->get();
            return response(FoodSlideResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function latest()
    {
        try {
            $data = FoodSlide::all()->sortByDesc('id')->take(3);
            return response(FoodSlideResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function show(FoodSlide $foodSlide)
    {
        try {
            return response(new FoodSlideResource($foodSlide), 200);
        } catch (\Exception $exception) {

            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
//                'title' => 'required|unique:FoodSlides,title',
            ],
            [
//                'title.required' => 'لطفا عنوان را وارد کنید',
//                'title.unique' => 'این عنوان قبلا ثبت شده است',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
            $data = FoodSlide::create($request->except('image'));
            if ($request['image']) {
                $name = 'FoodSlide_' . $data['id'] . '_' . uniqid() . '.jpg';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/foodslides/');
                $data->update(['image' => '/' . $image_path]);
            }

            return response(new FoodSlideResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, FoodSlide $foodSlide)
    {
//        return $request;

        $validator = Validator::make($request->all(),
            [
//                'title' => 'required|unique:FoodSlides,title,' . $foodSlide['id'],
            ],
            [
//                'title.required' => 'لطفا عنوان را وارد کنید',
//                'title.unique' => 'این عنوان قبلا ثبت شده است',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
            $foodSlide->update($request->except('image'));

            if ($request['image']) {
                $name = 'FoodSlide_' . $foodSlide['id'] . '_' . uniqid() . '.jpg';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/foodslides/');
                $foodSlide->update(['image' => '/' . $image_path]);
            }
            return response(new FoodSlideResource($foodSlide), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function destroy($id)
    {
        $data = FoodSlide::where('id', $id)->first();
        try {
            $data->delete();
            return response('FoodSlide deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(FoodSlide $foodSlide)
    {
        try {
            $foodSlide->update(['active' => !$foodSlide['active']]);
            return response(new FoodSlideResource($foodSlide), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

}
