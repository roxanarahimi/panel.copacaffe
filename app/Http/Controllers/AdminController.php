<?php

namespace App\Http\Controllers;

use App\Http\Resources\AdminResource;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function index()
    {
        try {
            $admins = AdminResource::collection(Admin::orderBy('id', 'desc')->get());
            return response($admins, 200);
        } catch (\Exception $exception) {
            return $exception;
        }

    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('name', 'email', 'password'),
            [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255|unique:admins',
                'password' => 'required|min:3',
            ],
            [
                'name.required' => 'لطفا نام را وارد کنید',
                'name.max' => 'نام بیش از حد طولانی است',
                'email.required' => 'لطفا ایمیل را وارد کنید',
                'email.unique' => 'این ایمیل قبلا ثبت شده',
                'password.required' => 'لطفا کلمه عبور را وارد کنید',
                'password.min' => 'لطفا حد اقل 3 کاراکتر وارد کنید',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        try {

            $admin = Admin::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password'])
            ]);
            return response(new AdminResource($admin), 201);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }

    }

    public function show(Admin $admin)
    {
        try {
            return response(new AdminResource($admin), 200);
        } catch (\Exception $exception) {
            return $exception->getMessage();
        }
    }

    public function update(Request $request)
    {

        $validator = Validator::make($request->all('name', 'email', 'password', 'new_password'),
            [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255|unique:admins,email,' . $request['id'],
                'new_password' => 'nullable|min:3',
            ],
            [
                'name.required' => 'لطفا نام را وارد کنید',
                'name.max' => 'نام بیش از حد طولانی است',
                'email.required' => 'لطفا ایمیل را وارد کنید',
                'email.unique' => 'این ایمیل قبلا ثبت شده',
                'new_password.min' => 'لطفا حد اقل 3 کاراکتر وارد کنید',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }

        try {
            $admin = Admin::find($request['id']);
            $admin->update([
                'name' => $request['name'],
                'email' => $request['email'],
            ]);
            if ($request['password']) {
                $admin->update([
                    'password' => Hash::make($request['password'])
                ]);
            }
            return response(new AdminResource($admin), 200);

        } catch (\Exception $exception) {
            return $exception->getMessage();
        }

    }

    public function destroy(Request $request)
    {
        if ($request['id'] != 1) {
            try {
                Admin::findOrFail($request['id'])->delete();
                return response('admin deleted', 200);
            } catch (\Exception $exception) {
                return $exception->getMessage();
            }
        }

    }

    public function updateProfile(Request $request)
    {
        $admin = Admin::findOrFail($request['id']);
        $validator = Validator::make($request->all('name', 'email', 'password'),
            [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255|unique:admins,email,' . $admin['id'],
                'new_password' => 'nullable|min:3',
//            'password' => 'required|string|min:3|confirmed',
            ],
            [
                'name.required' => 'لطفا نام را وارد کنید',
                'name.max' => 'نام بیش از حد طولانی است',
                'email.required' => 'لطفا ایمیل را وارد کنید',
                'email.unique' => 'این ایمیل قبلا ثبت شده',
                'new_password.min' => 'لطفا حد اقل 3 کاراکتر وارد کنید',
            ]
        );
        if ($validator->fails()) {
            return response()->json($validator->messages(), 422);
        }


        if ($request['current_password'] != '' && $request['new_password'] != '' && $request['new_password_repeat'] != '') {

            if (Hash::check($request['current_password'], $admin['password'])) {
                if (strlen($request['new_password']) < 3) {
                    return response()->json(['new_password' => ['لطفا حد اقل 3 کاراکتر وارد کنید']], 422);

                } else if ($request['new_password'] == $request['new_password_repeat']) {

                    if (!Hash::check($request['new_password'], $admin['password'])) {
                        $admin->update([
//                            'name' => $request['name'],
//                            'email' => $request['email'],
                            'password' => Hash::make($request['new_password'])
                        ]);
                    }

                } else {
                    return response()->json(['new_password_repeat' => ['کلمه عبور جدید با تکرار آن برابر نیست']], 422);
                }


            } else {
                return response()->json(['current_password' => ['کلمه عبور فعلی درست نیست']], 422);

            }


        } else {
            $admin->update([
                'name' => $request['name'],
                'email' => $request['email'],
            ]);
        }

        return response(['admin' => $admin], 200);

    }

    public function currentAdmin()
    {
        try {
            return response(Auth()->guard('admin-api')->user(), 200);
        } catch (\Exception $exception) {
            return response($exception->getMessage(), $exception->getCode());

        }

    }

}
