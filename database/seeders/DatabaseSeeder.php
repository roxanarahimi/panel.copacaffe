<?php

namespace Database\Seeders;

use App\Models\ArticleCategory;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//            \App\Models\ArticleCategory::factory()
//            ->has(\App\Models\Article::factory()->count(3))
//            ->create();
        $this->seed([
            //all
            AdminSeeder::class,
            UserSeeder::class,
            ArticleSeeder::class,
            ArticleCategorySeeder::class,
            SlideSeeder::class,

            //shop
            UserAddressSeeder::class,
            OrderSeeder::class,
            OrderItemSeeder::class,
            ProductSeeder::class,
            ProductCategorySeeder::class,
            ProductSizeSeeder::class,
            FinanceSeeder::class,

            //school
            CourseSeeder::class,
            CourseCategorySeeder::class,
            TeacherSeeder::class,
            FinanceSeeder::class,


            //office
            ProjectSeeder::class,
            ProjectCategorySeeder::class,
            ResumeSeeder::class,


            // ...
        ]);
    }
}
