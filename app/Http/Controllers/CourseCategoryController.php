<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseCategoryResource;
use App\Models\CourseCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CourseCategoryController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = CourseCategory::latest()->paginate($perPage);
            $pages_count = ceil($data->total()/$perPage);
            $labels = [];
            for ($i=1; $i <= $pages_count; $i++){
                (array_push($labels,$i));
            }
            return response([
                "data"=>CourseCategoryResource::collection($data),
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
            $data = CourseCategory::all()->where('active',1);
            return response(CourseCategoryResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function show(CourseCategory $courseCategory)
    {
        try {
            return response(new CourseCategoryResource($courseCategory), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:course_categories',
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
            $data = CourseCategory::create($request->all());
            return response(new CourseCategoryResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request,CourseCategory $courseCategory)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:course_categories,title,' . $courseCategory['id'],
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
            $courseCategory->update($request->all());
            return response(new CourseCategoryResource($courseCategory), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function destroy(Request $request)
    {
        try {
            $data = CourseCategory::findOrFail($request['id']);
            $data->Courses->each->delete();
            $data->delete();
            return response("category and it's subsets deleted", 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(CourseCategory $courseCategory)
    {
        try {
            $courseCategory->update(['active' => !$courseCategory['active']]);
            return response(new CourseCategoryResource($courseCategory), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    //2:2, 2:39

}
