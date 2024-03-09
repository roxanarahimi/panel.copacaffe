<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleCategory extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function articles()
    {
        return $this->hasMany(Article::class,  'article_category_id', 'id')->orderByDesc('id');
    }
 public function subsets()
    {
        return $this->hasMany(Article::class,  'article_category_id', 'id')->orderByDesc('id');
    }
}
