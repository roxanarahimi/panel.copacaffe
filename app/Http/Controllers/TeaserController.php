<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeaserResource;
use App\Models\Teaser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TeaserController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = Teaser::orderByDesc('id')->where('title', 'Like', '%' . $request['search'] . '%')->paginate($perPage);
            $pages_count = ceil($data->total() / $perPage);
            $labels = [];
            for ($i = 1; $i <= $pages_count; $i++) {
                (array_push($labels, $i));
            }
            return response([
                "data" => TeaserResource::collection($data),
                "pages" => $pages_count,
                "total" => $data->total(),
                "labels" => $labels,
                "title" => 'تیزر ها',
                "tooltip_new" => 'ثبت تیزر جدید',

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
    public function indexSite(Request $request)
    {
        try {
            $data = Teaser::orderByDesc('id')->where('title', 'Like', '%' . $request['search'] . '%')->where('active',1)->get();

            return response([
                "data" => TeaserResource::collection($data),
            ], 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function latest()
    {
        try {
            $data = Teaser::all()->sortByDesc('id')->take(3);
            return response(TeaserResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function show(Teaser $teaser)
    {
        try {
            return response(new TeaserResource($teaser), 200);
        } catch (\Exception $exception) {

            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:teasers,title',
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
            $data = Teaser::create($request->except('video'));
            if ($request['video']) {
                $name = 'Teaser_' . $data['id'] . '_' . uniqid() . '.mp4';
                $image_path = (new ImageController)->uploadImage($request['video'], $name, 'videos/teasers/');
                $data->update(['video' => '/' . $image_path]);
            }

            return response(new TeaserResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, Teaser $teaser)
    {
//        return $request;

        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:teasers,title,' . $teaser['id'],
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
            $teaser->update($request->except('video'));

            if ($request['video']) {
                $name = 'Teaser_' . $teaser['id'] . '_' . uniqid() . '.mp4';
                $image_path = (new ImageController)->uploadImage($request['video'], $name, 'videos/teasers/');
                if ($teaser['video']){
                    $file_to_delete = ltrim($teaser['video'], $teaser['video'][0]); //remove '/' from file name start
                    if (file_exists($file_to_delete)){  unlink($file_to_delete);}
                }
                $teaser->update(['video' => '/' . $image_path]);
                (new ImageController)->resizeImage('videos/Teasers/',$name);


            }

            return response(new TeaserResource($teaser), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function destroy($id)
    {
        $data = Teaser::where('id', $id)->first();
        try {
            if ($data['video']){
                $file_to_delete = ltrim($data['video'], $data['video'][0]); //remove '/' from file name start
                if (file_exists($file_to_delete)){  unlink($file_to_delete);}
            }
            $data->delete();
            return response('Teaser deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Teaser $teaser)
    {
        try {
            $teaser->update(['active' => !$teaser['active']]);
            return response(new TeaserResource($teaser), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }


}
