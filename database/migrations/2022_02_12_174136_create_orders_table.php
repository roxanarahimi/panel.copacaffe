<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id');
            $table->string('code')->nullable();
            $table->string('amount')->nullable();
            $table->string('payment')->default('not payed'); // payed // not payed // failed
            $table->string('status')->default('cart'); // cart // recorded // in progress // ready to send // sent // delivered // canceled //
            $table->integer('user_address_id')->nullable();
            $table->text('post_track_id')->nullable();
            $table->text('description')->nullable();

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
        Schema::dropIfExists('orders');
    }
}
