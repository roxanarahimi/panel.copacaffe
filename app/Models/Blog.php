<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function category()
    {
        return $this->belongsTo(BlogCategory::class, 'blog_category_id', 'id');
    }
    public function activeCategory()
    {
        return $this->belongsTo(ProductCategory::class, 'blog_category_id', 'id')->where('active',1);
    }
//
//    public function product()
//    {
//        return $this->hasOne(Product::class,  'id','product_id');
//    }
//    public function tag()
//    {
//        return $this->hasOne(Article::class,  'id','blog_tag_id');
//    }
//    public function foodslide()
//    {
//        return $this->hasOne(FoodSlide::class, 'article_id','id');
//    }
}
