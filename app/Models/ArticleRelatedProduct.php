<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArticleRelatedProduct extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function article()
    {
        return $this->belongsTo(Article::class, 'article_id', 'id');
    }
    public function relatedProductt()
    {
        return $this->belongsTo(Product::class, 'related_product_id', 'id');
    }
}
