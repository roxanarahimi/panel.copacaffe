<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function user()
    {
        return $this->belongsTo(User::class,'user_id','id');
    }
//    public function city()
//    {
//        return $this->belongsTo(City::class,  'city_id', 'id');
//    }
}
