<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArticleResource;
use App\Models\Article;
use App\Models\ArticleRelatedProduct;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ArticleController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = Article::orderByDesc('id')->where('title', 'Like', '%' . $request['search'] . '%')->paginate($perPage);
            $pages_count = ceil($data->total() / $perPage);
            $labels = [];
            for ($i = 1; $i <= $pages_count; $i++) {
                (array_push($labels, $i));
            }
            return response([
                "data" => ArticleResource::collection($data),
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
    public function indexSite(Request $request)
    {
        try {
            $data = Article::orderByDesc('id')->where('title', 'Like', '%' . $request['search'] . '%')->where('active',1);

            if ($request['cat'] != '') {
                $data = $data->where('article_category_id', $request['cat']);
            }
            $data = $data->get();

            return response([
                "data" => ArticleResource::collection($data),
            ], 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function latest()
    {
        try {
            $data = Article::all()->sortByDesc('id')->take(3);
            return response(ArticleResource::collection($data), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function show(Article $article)
    {
        try {
            return response(new ArticleResource($article), 200);
        } catch (\Exception $exception) {

            return response($exception);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:articles,title',
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
            $data = Article::create($request->except('image','related_products'));
            if ($request['image']) {
                $name = 'article_' . $data['id'] . '_' . uniqid() . '.png';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/articles/');
                $data->update(['image' => '/' . $image_path]);
                (new ImageController)->resizeImage('images/articles/',$name);

            }
            $relatedZ = ArticleRelatedProduct::where('article_id', $request['id'])->get();
            foreach ($relatedZ as $item){ $item->delete();}

            if ($request['related_products']){
                foreach ($request['related_products'] as $item){
                    ArticleRelatedProduct::create([
                        'article_id' => $data['id'],
                        'related_product_id' => $item,
                    ]);
                }
            }


            return response(new ArticleResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request, Article $article)
    {
//        return $request;

        $validator = Validator::make($request->all('title'),
            [
                'title' => 'required|unique:articles,title,' . $article['id'],
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
            $article->update($request->except('image','related_products'));

            if ($request['image']) {
                $name = 'article_' . $article['id'] . '_' . uniqid() . '.png';
                $image_path = (new ImageController)->uploadImage($request['image'], $name, 'images/articles/');
                if ($article['image']){
                    $file_to_delete = ltrim($article['image'], $article['image'][0]); //remove '/' from file name start
                    $file_to_delete_thumb = ltrim(str_replace('.png','_thumb.png',$file_to_delete));
                    if (file_exists($file_to_delete)){  unlink($file_to_delete);}
                    if (file_exists($file_to_delete_thumb)){  unlink($file_to_delete_thumb);}
                }
                $article->update(['image' => '/' . $image_path]);
                (new ImageController)->resizeImage('images/articles/',$name);


            }

            $relatedZ = ArticleRelatedProduct::where('article_id', $request['id'])->get();
            foreach ($relatedZ as $item){ $item->delete();}

            if ($request['related_products']){
                foreach ($request['related_products'] as $item){
                    ArticleRelatedProduct::create([
                        'article_id' => $article['id'],
                        'related_product_id' => $item,
                    ]);
                }
            }

            return response(new ArticleResource($article), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

//    public function destroy(Article $article)
    public function destroy($id)
    {
        $data = Article::where('id', $id)->first();
        try {
            if ($data['image']){
                $file_to_delete = ltrim($data['image'], $data['image'][0]); //remove '/' from file name start
                $file_to_delete_thumb = ltrim(str_replace('.png','_thumb.png',$file_to_delete));
                if (file_exists($file_to_delete)){  unlink($file_to_delete);}
                if (file_exists($file_to_delete_thumb)){  unlink($file_to_delete_thumb);}
            }
            $data->delete();
            return response('article deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Article $article)
    {

        try {
            $article->update(['active' => !$article['active']]);
            return response(new ArticleResource($article), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
    public function byCat($id)
    {
        try {
            $data = Article::orderByDesc('id')->where('article_category_id', $id)->where('active',1)->get();

            return response([
                "data"=>ArticleResource::collection($data),

            ], 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

}
