<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CourseCategory extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function courses()
    {
        return $this->hasMany(Course::class,  'course_category_id', 'id')->orderByDesc('id');
    }
    public function subsets()
    {
        return $this->hasMany(Course::class,  'course_category_id', 'id')->orderByDesc('id');
    }
}
