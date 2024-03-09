<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProjectResource;
use App\Models\Project;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = Project::latest()->paginate($perPage);
            $pages_count = ceil($data->total()/$perPage);
            $labels = [];
            for ($i=1; $i <= $pages_count; $i++){
                (array_push($labels,$i));
            }
            return response([
                "data"=>ProjectResource::collection($data),
                "pages"=>$pages_count,
                "total"=> $data->total(),
                "labels"=> $labels,
                "title"=> 'پروژه ها',
                "tooltip_new"=> 'ثبت پروژه جدید',

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function latest()
    {

        try {
            $data = Project::all()->sortByDesc('id')->take(3);
            return response(ProjectResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function indexSite(Request $request)
    {
        // dd($request->all());
        try {
            $data = Project::where('active', 1);
            if ($request['search'] != '') {
                $data = $data->where('title', 'Like', '%' . $request['search'] . '%');
            }
            $data = $data->get();

            return response($data, 200);
//            return response(new ProductResource($data), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function latestSite()
    {
        try {
            $data = Project::where('active', 1)->take(4)->latest()->get();
            return response($data, 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function show(Project $project)
    {
        try {
            return response(new ProjectResource($project), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:products,title',
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
            $data = Project::create($request->except('image'));

//            if ($request['image']){
                $name = 'project_' . $data['id'] . '_' . uniqid() . '.jpg';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/');
                (new ImageController)->resizeImage('images/', $name);
                $data->update(['image' => '/' . $image_path]);
//            }

            return response(new ProjectResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, Project $project)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:projects,title,' . $project['id'],
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

            $project->update($request->except('image'));

            if ($request['image']){
                $name = 'project_' . $project['id'] . '_' . uniqid() . '.jpg';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/');
                (new ImageController)->resizeImage('images/', $name);
                $project->update(['image' => '/' . $image_path]);
            }

            return response(new ProjectResource($project), 200);
        } catch (\Exception $exception) {
        }

        return response($exception);
    }


    public function destroy(Request $request)
    {
        $data = Project::findOrFail($request['id']);
        try {
            $data->delete();
            return response('project deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Project $product)
    {
        try {
            $product->update(['active' => !$product['active']]);
            return response(new ProjectResource($product), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
}
