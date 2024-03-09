<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class, 'order_id', 'id');
    }
    public function Address()
    {
        return $this->hasOne(UserAddress::class, 'id','user_address_id' );
    }
    public function transaction()
    {
        return $this->hasOne(Finance::class, 'id','order_id' );
    }

}
