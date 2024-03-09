<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResumesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resumes', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('gender');
            $table->string('father');
            $table->string('national_code');
            $table->string('marriage');
            $table->string('children')->nullable();
            $table->string('birth');
            $table->string('military')->nullable();
            $table->string('education');
            $table->string('position');
            $table->string('mobile');
            $table->string('email');
            $table->string('address');
            $table->longText('skill');
            $table->longText('history');
            $table->longText('status')->nullable();
            $table->longText('description')->nullable();
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
        Schema::dropIfExists('resumes');
    }
}
