<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function category()
    {
        return $this->belongsTo(CourseCategory::class, 'course_category_id', 'id');
    }
    public function activeCategory()
    {
        return $this->belongsTo(CourseCategory::class, 'course_category_id', 'id')->where('active',1);
    }
    public function teacher()
    {
        return $this->belongsTo(Teacher::class, 'course_teacher_id', 'id');
    }
}
