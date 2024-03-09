<?php

namespace App\Http\Controllers;

use App\Http\Resources\FinanceResource;
use App\Models\Finance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FinanceController extends Controller
{
    public function index(Request $request)
    {
        try {
            $perPage = $request['perPage'];
                $data = Finance::latest()->paginate($perPage);
                $pages_count = ceil($data->total()/$perPage);
                $labels = [];
                for ($i=1; $i <= $pages_count; $i++){
                    (array_push($labels,$i));
                }
                return response([
                    "data"=>FinanceResource::collection($data),
                    "pages"=>$pages_count,
                    "total"=> $data->total(),
                    "labels"=> $labels,
                    "title"=> 'تراکنش ها',
                    "tooltip_new"=> '',

                ], 200);

        } catch (\Exception $exception) {
            return response($exception);
        }
    }


    public function show(Finance $finance)
    {
        try {
            return response(new FinanceResource($finance), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function store(Request $request)
    {
//        $validator = Validator::make($request->all('title'),
//            [
//                'title' => 'required|unique:product_categories',
//            ],
//            [
//                'title.required' => 'لطفا عنوان را وارد کنید',
//                'title.unique' => 'این عنوان قبلا ثبت شده است',
//            ]
//        );
//        if ($validator->fails()) {
//            return response()->json($validator->messages(), 422);
//        }
        try {
            $data = Finance::create($request->all());
            return response(new FinanceResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function update(Request $request,Finance $finance)
    {
//        $validator = Validator::make($request->all('title'),
//            [
//                'title' => 'required|unique:product_categories,title,' . $finance['id'],
//            ],
//            [
//                'title.required' => 'لطفا عنوان را وارد کنید',
//                'title.unique' => 'این عنوان قبلا ثبت شده است',
//            ]
//        );
//        if ($validator->fails()) {
//            return response()->json($validator->messages(), 422);
//        }
        try {
            $finance->update($request->all());
            return response(new FinanceResource($finance), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function destroy(Request $request)
    {
        try {
            $data = Finance::findOrFail($request['id']);
            $data->products->each->delete();
            $data->delete();
            return response("record and it's subsets deleted", 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function activeToggle(Finance $finance)
    {
        try {
            $finance->update(['active' => !$finance['active']]);
            return response(new FinanceResource($finance), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }


}
