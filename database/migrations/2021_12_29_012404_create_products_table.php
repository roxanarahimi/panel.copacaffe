<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->integer('product_category_id');
            $table->string('title');
            $table->string('subTitle')->nullable();
            $table->longText('text')->nullable();
            $table->longText('images')->nullable();
            $table->integer('stock')->default(0);
            $table->longText('features')->nullable();
            $table->boolean('active')->default(0);

            $table->integer('price')->default(0);
            $table->integer('off')->default(0);
            $table->integer('view')->default(0);
            $table->integer('sale')->default(0);
            $table->float('score')->default(0);
            $table->integer('score_count')->default(0);
//            $table->integer('likes')->default(0);
//            $table->integer('dislikes')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
