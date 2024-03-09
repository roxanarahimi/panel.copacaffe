<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class CourseController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = Course::latest()->paginate($perPage);
            $pages_count = ceil($data->total()/$perPage);
            $labels = [];
            for ($i=1; $i <= $pages_count; $i++){
                (array_push($labels,$i));
            }
            return response([
                "data"=>CourseResource::collection($data),
                "pages"=>$pages_count,
                "total"=> $data->total(),
                "labels"=> $labels,
                "title"=> 'دوره ها',
                "tooltip_new"=> 'ثبت دوره جدید',

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function latest()
    {

        try {
            $data = Course::all()->sortByDesc('id')->take(3);
            return response(CourseResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function indexSite(Request $request)
    {
        // dd($request->all());
        try {
            $data = Course::whereHas('activeCategory')->with('category')->where('active', 1);
//            if ($request['stock'] == 'true') {
//                $data = $data->where('stock', '>', 0);
//            }
            if ($request['cat_ids'] != '') {
                $ids = explode(',', $request['cat_ids']);
                $data = $data->whereIn('course_category_id', $ids);
            }
            if ($request['off'] === 'true') {
                $data = $data->where('off', '>', 0);
//                    ->where('stock', '>', 0);
            }
            if ($request['search'] != '') {
                $data = $data->where('title', 'Like', '%' . $request['search'] . '%');
            }
//            if ($request['sort'] != '') {
//                switch ($request['sort']) {
//
//                    case ('sale'):
//                    {
//                        $data = $data->orderByDesc('sale');
//                        break;
//                    }
//                    case ('score'):
//                    {
//                        $data = $data->orderByDesc('score');
//                        break;
//                    }
//                    case ('cheap'):
//                    {
//                        $data = $data->orderBy('price');
//                        break;
//                    }
//                    case ('expensive'):
//                    {
//                        $data = $data->orderByDesc('price');
//                        break;
//                    }
//                    case ('view'):
//                    {
//                        $data = $data->orderByDesc('view');
//                        break;
//                    }
//                    default:
//                    {
//                        $data = $data->latest();
//                        break;
//                    }
//                }
//            }

            $data = $data->get();

            return response(CourseResource::collection($data), 200);
//            return response(new CourseResource($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function stockSite()
    {
        try {
//
            $data = Course::whereHas('activeCategory')->with('category')->where('active', 1)->where('stock', '>', 0)->latest()->get();

            return response($data, 200);
//            return response(new CourseResource($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function latestSite()
    {
        try {
            $data = Course::whereHas('activeCategory')->with('category')->where('active', 1)->take(4)->latest()->get();
            return response($data, 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function show(Course $course)
    {
        try {

            return response(new CourseResource($course), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }


    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'title' => 'required|unique:courses,title',
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
//            return $request['sizes'];
            $data = Course::create($request->except('image'));

            return response(new CourseResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, Course $course)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:courses,title,' . $course['id'],
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
            $course->update($request->all());
            return response(new CourseResource($course), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function destroy(Request $request)
    {
        $data = Course::findOrFail($request['id']);
        try {
            $data->sizes->each->delete();
            $data->delete();
            return response('Course deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Course $course)
    {
        try {
            $course->update(['active' => !$course['active']]);
            return response(new CourseResource($course), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

}
