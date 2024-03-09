<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function category()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id', 'id');
    }
    public function activeCategory()
    {
        return $this->belongsTo(ProductCategory::class, 'product_category_id', 'id')->where('active',1);
    }
//    public function sizes()
//    {
//        return $this->hasMany(ProductSize::class,  'product_id', 'id');
////            ->orderByDesc('id');
//    }
    public function article()
    {
        return $this->belongsToMany(Article::class, 'id','product_id');
    }
    public function relatedProducts()
    {
        return $this->hasMany(RelatedProduct::class, 'product_id', 'id');
    }
}

