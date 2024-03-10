<?php

namespace App\Http\Controllers;

use App\Http\Resources\SlideResource;
use App\Models\Slide;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SlideController extends Controller
{
    public function index()
    {
        try {
//            $data = Slide::all()->sortByDesc('id');
            $data = Slide::all()->sortBy('index');
            return response(SlideResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function indexSite()
    {
        try {
            $data = Slide::all()->sortBy('index')->where('active', 1);
            return response(SlideResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function latest()
    {
        try {
            $data = Slide::all()->sortByDesc('id')->take(3);
            return response(SlideResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function show(Slide $slide)
    {
        try {
            return response(new SlideResource($slide), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
//                'title' => 'required|unique:slides,title',
                'title' => 'required',
            ],
            [
                'title.required' => 'لطفا عنوان را وارد کنید',
//                'title.unique' => 'این عنوان قبلا ثبت شده است',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
            $last = Slide::all()->sortByDesc('index')->first();
            $data = Slide::create($request->except('image'));
            $data->update(['index' => $last['index'] + 1]);

            $name = 'slide_' . $data['id'] . '_' . uniqid() . '.jpg';
            $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/slides/');
            $data->update(['image' => '/' . $image_path]);

            return response(new SlideResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function update(Request $request, Slide $slide)
    {

//        $validator = Validator::make($request->all('title'),
//            [
////                'title' => 'required|unique:slides,title,' . $slide,
//                'title' => 'required' ,
//            ],
//            [
//                'title.required' => 'لطفا عنوان را وارد کنید',
//            ]
//        );
//        if ($validator->fails()) {
//            return response()->json($validator->messages(), 422);
//        }
        try {
            $slide->update($request->except('image'));
            if ($request['image']) {
                $name = 'slide_' . $slide['id'] . '_' . uniqid() . '.jpg';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/slides/');
                if ($slide['image']){
                    $file_to_delete = ltrim($slide['image'], $slide['image'][0]); //remove '/' from file name start
                    $file_to_delete_thumb = ltrim(str_replace('.png','_thumb.png',$file_to_delete));
                    if (file_exists($file_to_delete)){  unlink($file_to_delete);}
                    if (file_exists($file_to_delete_thumb)){  unlink($file_to_delete_thumb);}
                }
                $slide->update(['image' => '/' . $image_path]);
            }
            return response(new SlideResource($slide), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

//    public function destroy(Slide $slide)
    public function destroy(Request $request)
    {
        $data = Slide::findOrFail($request['id']);
        try {
            $data->delete();
            return response('slide deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function activeToggle(Slide $slide)
    {
        try {
            $slide->update(['active' => !$slide['active']]);
            return response(new SlideResource($slide), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }
}
