<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BlogCategory extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function blogs()
    {
        return $this->hasMany(Blog::class,  'blog_category_id', 'id')->orderByDesc('id');
    }
    public function subsets()
    {
        return $this->hasMany(Blog::class,  'blog_category_id', 'id')->orderByDesc('id');
    }}
