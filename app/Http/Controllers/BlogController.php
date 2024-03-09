<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\BlogResource;

class BlogController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = Blog::orderByDesc('id')->where('title', 'Like', '%' . $request['search'] . '%')->paginate($perPage);
            $pages_count = ceil($data->total() / $perPage);
            $labels = [];
            for ($i = 1; $i <= $pages_count; $i++) {
                (array_push($labels, $i));
            }
            return response([
                "data" => BlogResource::collection($data),
                "pages" => $pages_count,
                "total" => $data->total(),
                "labels" => $labels,
                "title" => 'مطالب',
                "tooltip_new" => 'ثبت مطلب جدید',

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function latest()
    {
        try {
            $data = Blog::all()->sortByDesc('id')->take(3);
            return response(BlogResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function show(Blog $blog)
    {
        try {
            return response(new BlogResource($blog), 200);
        } catch (\Exception $exception) {

            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:blogs,title',
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
            $data = Blog::create($request->except('image'));
            if ($request['image']) {
                $name = 'Blog_' . $data['id'] . '_' . uniqid() . '.jpg';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/blogs/');
                $data->update(['image' => '/' . $image_path]);
                (new ImageController)->resizeImage('images/blogs/',$name);

            }

            return response(new BlogResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, Blog $blog)
    {
//        return $request;

        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:blogs,title,' . $blog['id'],
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
            $blog->update($request->except('image'));

            if ($request['image']) {
                $name = 'Blog_' . $blog['id'] . '_' . uniqid() . '.jpg';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/blogs/');

                if ($blog['image']){
                    $file_to_delete = ltrim($blog['image'], $blog['image'][0]); //remove '/' from file name start
                    $file_to_delete_thumb = ltrim(str_replace('.png','_thumb.png',$file_to_delete));
                    if (file_exists($file_to_delete)){  unlink($file_to_delete);}
                    if (file_exists($file_to_delete_thumb)){  unlink($file_to_delete_thumb);}
                }

                $blog->update(['image' => '/' . $image_path]);
                (new ImageController)->resizeImage('images/blogs/',$name);


            }

            return response(new BlogResource($blog), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

//    public function destroy(Blog $blog)
    public function destroy($id)
    {
        $data = Blog::where('id', $id)->first();
        try {
            if ($data['image']){
                $file_to_delete = ltrim($data['image'], $data['image'][0]); //remove '/' from file name start
                $file_to_delete_thumb = ltrim(str_replace('.png','_thumb.png',$file_to_delete));
                if (file_exists($file_to_delete)){  unlink($file_to_delete);}
                if (file_exists($file_to_delete_thumb)){  unlink($file_to_delete_thumb);}
            }
            $data->delete();
            return response('Blog deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Blog $blog)
    {

        try {
            $blog->update(['active' => !$blog['active']]);
            return response(new BlogResource($blog), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
    public function byCat($id)
    {
        try {
            $data = Blog::orderByDesc('id')->where('blog_category_id', $id)->where('active',1)->get();

            return response([
                "data"=>BlogResource::collection($data),

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }
}
