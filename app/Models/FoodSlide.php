<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodSlide extends Model
{
    use HasFactory;
    protected $table = 'food_slides';
    protected $guarded = ['id'];
    public function article()
    {
        return $this->belongsTo(Article::class,   'article_id','id');
    }
}
