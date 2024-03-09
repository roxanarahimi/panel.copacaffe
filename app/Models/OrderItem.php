<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function order()
    {
        return $this->belongsTo(Order::class, 'order_id', 'id');
    }

    public function product()
    {
        return $this->hasOne(Product::class,  'id','product_id');
    }

    public function size()
    {
        return $this->hasOne(ProductSize::class,  'id','product_size_id');
    }
}
