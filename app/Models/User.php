<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;


    public function allOrders()
    {
        return $this->hasMany(Order::class,'user_id','id')->orderByDesc('id');
    }
    public function orders()
    {
        return $this->hasMany(Order::class,'user_id','id')->where('status','!=','cart')->orderByDesc('id');
    }

    public function cart()
    {
        return $this->hasOne(Order::class, 'user_id', 'id')->where('status','cart');
    }

    public function addresses()
    {
        return $this->hasMany(UserAddress::class,   'user_id','id');
    }
//
//    public function transactions()
//    {
//        return $this->hasMany(Finance::class,   'user_id','id');
//    }


    protected $guarded = ['id' ];


    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

}
