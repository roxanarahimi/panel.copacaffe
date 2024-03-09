<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Redis;
use App\Models\User;
use Kavenegar;


class UserController extends Controller

{
    public function indexUsers(Request $request)
    {
        try {
            $perPage = $request['perPage'];
            $data = User::latest()->where('scope', 'user')->where('name', 'Like', '%' . $request['search'] . '%')->paginate($perPage);
            $pages_count = ceil($data->total() / $perPage);
            $labels = [];
            for ($i = 1; $i <= $pages_count; $i++) {
                (array_push($labels, $i));
            }
            return response([
                "data" => UserResource::collection($data),
                "pages" => $pages_count,
                "total" => $data->total(),
                "labels" => $labels,
                "title" => 'کاربر ها',
                "tooltip_new" => '',

            ], 200);
        } catch (\Exception $exception) {
            return $exception;
        }

    }

    public function indexAdmins(Request $request)
    {
        try {
            $perPage = 4;
            $data = User::latest()->where('scope', 'admin')->where('name', 'Like', '%' . $request['search'] . '%')->paginate($perPage);
            $pages_count = ceil($data->total() / $perPage);
            $labels = [];
            for ($i = 1; $i <= $pages_count; $i++) {
                (array_push($labels, $i));
            }
            return response([
                "data" => UserResource::collection($data),
                "pages" => $pages_count,
                "total" => $data->total(),
                "labels" => $labels,
                "title" => 'مدیر ها',
                "tooltip_new" => '',

            ], 200);
        } catch (\Exception $exception) {
            return $exception;
        }

    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all('name', 'email', 'password'),
            [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255|unique:users',
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

            $user = User::create([
                'name' => $request['name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password'])
            ]);
            return response(new UserResource($user), 201);
        } catch (\Exception $exception) {
            return response($exception);

        }

    }

    public function show(User $user)
    {
        try {
            return response(new UserResource($user), 200);
        } catch (\Exception $exception) {
            return response($exception);

        }
    }

    public function update(Request $request, User $user)
    {

        $validator = Validator::make($request->all('name', 'email', 'password', 'new_password'),
            [
                'name' => 'required|max:255',
                'email' => 'required|email|max:255|unique:users,email,' . $user['id'],
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
            $user->update($request->all());
            if ($request['password']) {
                $user->update([
                    'password' => Hash::make($request['password'])
                ]);
            }
            return response(new UserResource($user), 200);

        } catch (\Exception $exception) {
            return response($exception);
        }

    }

    public function destroy(User $user)
    {
        try {
            $user->sizes->each->delete();
            $user->delete();
            return response('deleted', 200);
        } catch (\Exception $exception) {
            return response($exception);
        }

    }

    public function updateProfile(Request $request)
    {
        $user = User::where('id',$request['id'])->first();
//        return $user;
//        $validator = Validator::make($request->all('name', 'email', 'password'),
//            [
//                'name' => 'required|max:255',
//                'email' => 'required|email|max:255|unique:users,email,' . $user['id'],
//                'new_password' => 'nullable|min:3',
////            'password' => 'required|string|min:3|confirmed',
//            ],
//            [
//                'name.required' => 'لطفا نام را وارد کنید',
//                'name.max' => 'نام بیش از حد طولانی است',
//                'email.required' => 'لطفا ایمیل را وارد کنید',
//                'email.unique' => 'این ایمیل قبلا ثبت شده',
//                'new_password.min' => 'لطفا حد اقل 3 کاراکتر وارد کنید',
//            ]
//        );
//        if ($validator->fails()) {
//            return response()->json($validator->messages(), 422);
//        }

        try {
            if ($request['current_password'] != '' && $request['new_password'] != '' && $request['new_password_repeat'] != '') {

                if (Hash::check($request['current_password'], $user['password'])) {
                    if (strlen($request['new_password']) < 3) {
                        return response()->json(['new_password' => ['لطفا حد اقل 3 کاراکتر وارد کنید']], 422);

                    } else if ($request['new_password'] == $request['new_password_repeat']) {

                        if (!Hash::check($request['new_password'], $user['password'])) {
                            $user->update([
                                'name' => $request['name'],
                                'email' => $request['email'],
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
                $user->update([
                    'name' => $request['name'],
                    'email' => $request['email'],
                ]);
            }

            return response(['user' => $user], 200);
        } catch (\Exception $exception) {
            return response($exception);

        }

    }


    public function getOtpNoRedis($mobile)
    {
        $user = User::where('mobile', $mobile)->first();
        if ($user && $user['scope'] !== 'user') {
            return response('شما مجاز به ورود نیستید لطفا با موبایل / ایمیل دیگری ثبت نام کنید.', 400);
        }

        if ($user) {
            $characters = '1234567890';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < 5; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
            try {
                $sender = "2000500666";        //This is the Sender number
                $message = "به وبسایت وان آنلاین شاپ خوش آمدید. کد تایید شما: " . $randomString; //Redis::get($mobile);
                $receptor = "09128222725";    //Receptors numbers

                return response(['otp' => $randomString, 'user' => new UserResource($user)], 200);
            } catch (\Kavenegar\Exceptions\ApiException $e) {
                return $e->errorMessage();
            } catch (\Kavenegar\Exceptions\HttpException $e) {
                return $e->errorMessage();
            }
        } else {
            return response('شما عضو نیستید لطفا ابتدا ثبت نام کنید سپس وارد شوید', 400);
        }
    }

    public function loginOtp(User $user)
    {
        \auth()->user = $user;
        $token = $user->createToken('user')->accessToken;
        $date = new \DateTime();
        $date->add(new \DateInterval('PT2H'));
        $user->update(['last_activity' => $date->format('Y-m-d H:i:s')]);

        return response(['user' => new UserResource($user), 'access_token' => $token, 'expire' => date_format($date, 'Y-m-d H:i:s')], 200);
    }


    public function getOtp($mobile)
    {
        $user = User::where('mobile', $mobile)->first();
        if ($user) {
            $characters = '1234567890';
            $charactersLength = strlen($characters);
            $randomString = '';
            for ($i = 0; $i < 5; $i++) {
                $randomString .= $characters[rand(0, $charactersLength - 1)];
            }
//            Redis::set($mobile, $randomString, 60);

            try {
                $sender = "2000500666";        //This is the Sender number
                $message = "به وبسایت عسل لذیذ خوش آمدید. کد تایید شما: " . Redis::get($mobile);        //The body of SMS
                $receptor = "09128222725";            //Receptors numbers
                $result = Kavenegar::Send($sender, $receptor, $message);
//                $code = Redis::get($mobile);


                return response(['otp' => $randomString], 200);
            } catch (\Kavenegar\Exceptions\ApiException $e) {
                // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
                return $e->errorMessage();
            } catch (\Kavenegar\Exceptions\HttpException $e) {
                // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
                return $e->errorMessage();
            }
        } else {
            return response('شما عضو نیستید لطفا ابتدا ثبت نام کنید سپس وارد شوید', 400);
        }
    }

    public function verifyOtp(Request $request)
    {
        try {
            $user = User::where('mobile', $request['mobile'])->first();
            if ($user) {
                if (Redis::get($request['mobile'])) {
                    if ($request['code'] === "22222") { //(string)Redis::get($request['mobile'])

                        return response(new UserResource($user), 200);
                    } else {
                        return response('کد وارد شده اشتباه است', 400);
                    }
                } else {
                    return response('لطفا دوباره درخواست کد دهید', 400);
                }
            } else {
                return response('کاربری با این شماره وجود ندارد', 400);

            }

        } catch (\Exception $exception) {
            return response($exception);
        }
    }

    public function otp(Request $request)
    {
        try {
            $sender = "10005989";        //This is the Sender number

            $message = "به وبسایت عسل لذیذ خوش آمدید";        //The body of SMS



            $receptor = $request['mobile'];            //Receptors numbers

            $result = Kavenegar::Send($sender, $receptor, $message);

            return $result;
        } catch (\Kavenegar\Exceptions\ApiException $e) {
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            return $e->errorMessage();
        } catch (\Kavenegar\Exceptions\HttpException $e) {
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            return $e->errorMessage();
        }
    }
    public function otp1()
    {
        try {
            $sender = "10005989";        //This is the Sender number

            $message = "به وبسایت عسل لذیذ خوش آمدید";        //The body of SMS

            $receptor = "09128222725";            //Receptors numbers

            $result = Kavenegar::Send($sender, $receptor, $message);

            return $result;
        } catch (\Kavenegar\Exceptions\ApiException $e) {
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            return $e->errorMessage();
        } catch (\Kavenegar\Exceptions\HttpException $e) {
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            return $e->errorMessage();
        }
    }

    public function otp2()
    {
        try {
            $receptor = "09128222725";
            $token = "123";
            $token2 = "456";
            $token3 = "789";
            $template = "verify";
            //Send null for tokens not defined in the template
            //Pass token10 and token20 as parameter 6th and 7th
            $result = Kavenegar::VerifyLookup($receptor, $token, $token2, $token3, $template, $type = null);
            return $result;
        } catch (\Kavenegar\Exceptions\ApiException $e) {
            // در صورتی که خروجی وب سرویس 200 نباشد این خطا رخ می دهد
            return $e->errorMessage();
        } catch (\Kavenegar\Exceptions\HttpException $e) {
            // در زمانی که مشکلی در برقرای ارتباط با وب سرویس وجود داشته باشد این خطا رخ می دهد
            return $e->errorMessage();
        }
    }

}

