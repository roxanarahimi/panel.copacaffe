<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;


class ApiController extends Controller
{
    public function foods()
    {
        try {
//            $data = Food::all()->sortByDesc('id');
            $data = Food::all()->groupBy('type');
            return response($data, 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
    public function food(Food $food)
    {
        try {
//
            return response($food, 200);
        } catch (\Exception $exception) {
            return response($exception);
        }
    }
}
