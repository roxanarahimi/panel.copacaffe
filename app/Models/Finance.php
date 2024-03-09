<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Finance extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

//
//    public function user()
//    {
//        return $this->belongsTo(User::class, 'user_id', 'id');
//    }
    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }
}
