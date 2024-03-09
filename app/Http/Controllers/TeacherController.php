<?php

namespace App\Http\Controllers;

use App\Http\Resources\TeacherResource;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TeacherController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = Teacher::latest()->paginate($perPage);
            $pages_count = ceil($data->total()/$perPage);
            $labels = [];
            for ($i=1; $i <= $pages_count; $i++){
                (array_push($labels,$i));
            }
            return response([
                "data"=>TeacherResource::collection($data),
                "pages"=>$pages_count,
                "total"=> $data->total(),
                "labels"=> $labels,
                "title"=> 'آموزگاران',
                "tooltip_new"=> 'ثبت آموزگار جدید',

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function latest()
    {

        try {
            $data = Teacher::all()->sortByDesc('id')->take(3);
            return response(TeacherResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function indexSite(Request $request)
    {
        // dd($request->all());
        try {
            $data = Teacher::where('active', 1);
            if ($request['search'] != '') {
                $data = $data->where('title', 'Like', '%' . $request['search'] . '%');
            }
            $data = $data->get();

            return response($data, 200);
//            return response(new TeacherResource($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function latestSite()
    {
        try {
            $data = Teacher::where('active', 1)->take(4)->latest()->get();
            return response($data, 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function show(Teacher $teacher)
    {
        try {
            return response(new TeacherResource($teacher), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required',
                'national_code' => 'required|unique:teachers,national_code',
            ],
            [
                'name.required' => 'لطفا نام را وارد کنید',
                'national_code.required' => 'لطفا کد ملی را وارد کنید',
                'national_code.unique' => 'این کد ملی قبلا ثبت شده است',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
//            return $request['sizes'];
            $data = Teacher::create($request->all());

            return response(new TeacherResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, Teacher $teacher)
    {
        $validator = Validator::make($request->all(),
            [
                'name' => 'required',
                'national_code' => 'required|unique:teachers,national_code,' . $teacher['id'],
            ],
            [
                'name.required' => 'لطفا نام را وارد کنید',
                'national_code.required' => 'لطفا کد ملی را وارد کنید',
                'national_code.unique' => 'این کد ملی قبلا ثبت شده است',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {

            $teacher->update($request->all());
            return response(new TeacherResource($teacher), 200);
        } catch (\Exception $exception) {
        }

        return response($exception);
    }

    public function destroy(Request $request)
    {
        $data = Teacher::findOrFail($request['id']);
        try {
            $data->delete();
            return response('teacher deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Teacher $teacher)
    {
        try {
            $teacher->update(['active' => !$teacher['active']]);
            return response(new TeacherResource($teacher), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
}
