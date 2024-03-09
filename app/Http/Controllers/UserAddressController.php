<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserAddressResource;
use App\Models\UserAddress;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserAddressController extends Controller
{
    public function index()
    {
        $data = UserAddressResource::collection(UserAddress::all());
        try {
            return response($data, 200);
        } catch (\Exception $exception) {
            return response($exception);
        }

    }

    public function show(UserAddress $userAddress)
    {
        try {
            return response(new UserAddressResource($userAddress), 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function store(Request $request)
    {

//        return $request;
//
        $validator = Validator::make($request->all(),
            [
                'title' => 'required',
                'state' => 'required',
                'city' => 'required',
                'postal_code' => 'required',
                'address' => 'required',
            ],
            [
                'title.required' => 'لطفا عنوان را وارد کنید',
                'state.required' => 'لطفا استان را وارد کنید',
                'city.required' => 'لطفا شهر را وارد کنید',
                'postal_code.required' => 'لطفا کد پستی را وارد کنید',
                'address.required' => 'لطفا آدرس را وارد کنید',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }
        try {
            $data = UserAddress::create($request->all());
            return response(new UserAddressResource($data), 201);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function update(Request $request, UserAddress $userAddress)
    {

        $validator = Validator::make($request->all(),
            [
                'title' => 'required',//$clientAddress['id'];
                'state' => 'required',
                'city' => 'required',
                'postal_code' => 'required',
                'address' => 'required',
            ],
            [
                'title.required' => 'لطفا عنوان را وارد کنید',
                'state.required' => 'لطفا استان را وارد کنید',
                'city.required' => 'لطفا شهر را وارد کنید',
                'postal_code.required' => 'لطفا کد پستی را وارد کنید',
                'address.required' => 'لطفا آدرس را وارد کنید',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        try {
            $userAddress->update($request->all());
            return response(new UserAddressResource($userAddress), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function destroy(Request $request)
    {
        try {
            $data = UserAddress::findOrFail($request['id']);
            $data->delete();
            return response('address deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }
}
