<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResumeResource;
use App\Models\Resume;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ResumeController extends Controller
{

    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = Resume::latest()->paginate($perPage);
            $pages_count = ceil($data->total()/$perPage);
            $labels = [];
            for ($i=1; $i <= $pages_count; $i++){
                (array_push($labels,$i));
            }
            return response([
                "data"=>ResumeResource::collection($data),
                "pages"=>$pages_count,
                "total"=> $data->total(),
                "labels"=> $labels,
                "title"=> 'رزومه ها',
//                "tooltip_new"=> 'ثبت فرصت شغلی جدید',

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function latest()
    {

        try {
            $data = Resume::all()->sortByDesc('id')->take(4);
            return response(ResumeResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function indexSite(Request $request)
    {
        // dd($request->all());
        try {
            $data = Resume::whereHas('activeCategory')->with('category')->where('active', 1);
            if ($request['stock'] == 'true') {
                $data = $data->where('stock', '>', 0);
            }elseif ($request['stock'== 'limited']){
                $data = $data->where('stock', '>', 0)->where('stock','<',5);
            }
            if ($request['cat_ids'] != '') {
                $ids = explode(',', $request['cat_ids']);
                $data = $data->whereIn('Resume_category_id', $ids);

            }
            if ($request['off'] == 'true') {
                $data = $data->where('off', '>', 0)->where('stock', '>', 0);

            }
            if ($request['search'] != '') {
                $data = $data->where('title', 'Like', '%' . $request['search'] . '%');

            }
            if ($request['sort'] != '') {
                switch ($request['sort']) {

                    case ('sale'):
                    {
                        $data = $data->orderByDesc('sale');
                        break;
                    }
                    case ('score'):
                    {
                        $data = $data->orderByDesc('score');
                        break;
                    }
                    case ('cheap'):
                    {
                        $data = $data->orderBy('price');
                        break;
                    }
                    case ('expensive'):
                    {
                        $data = $data->orderByDesc('price');
                        break;
                    }
                    case ('view'):
                    {
                        $data = $data->orderByDesc('view');
                        break;
                    }
                    default:
                    {
                        $data = $data->orderByDesc('id');
                        break;
                    }
                }
            }
            if ($request['sale'] == 'true') {
                $data = $data->orderByDesc('sale');

            }
            if ($request['limit'] != '') {
                $data = $data->skip(0)->take($request['limit']);
            }
            $data = $data->get();

            return response(ResumeResource::collection($data), 200);
//            return response(new ResumeResource($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function stockSite()
    {
        try {
//
            $data = Resume::whereHas('activeCategory')->with('category')->where('active', 1)->where('stock', '>', 0)->latest()->get();

            return response(ResumeResource::collection($data), 200);
//            return response(new ResumeResource($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function latestSite()
    {
        try {
            $data = Resume::whereHas('activeCategory')->with('category')->where('active', 1)->take(4)->latest()->get();
            return response(ResumeResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function show(Resume $Resume)
    {
        try {
            return response(new ResumeResource($Resume), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }


    public function saveImages($requestImages, $ResumeId)
    {
        try {
            $images = '';
            for ($i = 0; $i < count($requestImages); $i++) {
                if ($requestImages[$i][1]) {
                    $name = 'Resume_' . $ResumeId . '_' . uniqid() . '.jpg';
                    $image_path = (new ImageController)->uploadImage($requestImages[$i][1], $name, 'images/');
//                    (new ImageController)->resizeImage('images/', $name);
                    $images = $images . '/' . $image_path . ',';
                } else if ($requestImages[$i][0]) {
                    $images = $images . $requestImages[$i][0] . ',';
                }
            }
            return $images;
        }catch (\Exception $exception){
            return $exception;
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:Resumes,title',
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
            $Resume = Resume::create($request->except('sizes', 'images'));

            return response(new ResumeResource($Resume), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, Resume $Resume)
    {
        $validator = Validator::make($request->all(),
            [
            ],
            [

            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
            $Resume->update($request->all());

//            $images = $this->saveImages($request['images'], $Resume['id']);
//            $Resume->update(['images' => substr($images, 0, -1)]);

            return response(new ResumeResource($Resume), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function destroy(Resume $Resume)
    {

        try {
            $Resume->delete();
            return response('Resume deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Resume $Resume)
    {
        try {
            $Resume->update(['active' => !$Resume['active']]);
            return response(new ResumeResource($Resume), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function updateOrder(Request $request, Resume $Resume )
    {
        try {

            $Resume->update(['images' => substr($request['images'], 0, -1)]);
            return response(new ResumeResource($Resume), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

}
