<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = array(
            array('id' => '1','name' => 'رکسانا','email' => 'ms.roxanarahimi@gmail.com','email_verified_at' => NULL,'mobile' => '09128222725','password' => '$2y$10$nS5CsJ3c6e7496FbwAgyPu34Xc/QdbuN8YHciSgwej8TlgH.5J6my','gender' => 'female','avatar' => NULL,'scope' => 'admin','remember_token' => NULL,'last_activity' => '2022-04-09 21:02:37','created_at' => '2021-12-30 18:03:40','updated_at' => '2022-04-09 21:02:37'),
            array('id' => '2','name' => 'رویا','email' => 'new@new.com','email_verified_at' => NULL,'mobile' => '09190691798','password' => '$2y$10$SoWPSibbykZXEhCldlq87Oj0goG1d/v9JGVrWfLlc9N2HYo9A.dui','gender' => 'female','avatar' => NULL,'scope' => 'user','remember_token' => NULL,'last_activity' => '2022-03-06 03:30:35','created_at' => '2021-12-30 18:03:40','updated_at' => '2022-03-06 01:30:35'),
            array('id' => '3','name' => 'محمد','email' => 'a@bnm.com','email_verified_at' => NULL,'mobile' => '09032313681','password' => '$2y$10$hzUQbvn0.OKBb9ypHJ/nSOoXAenbvONIGib4awYAfquQOcXkECyau','gender' => 'male','avatar' => NULL,'scope' => 'user','remember_token' => NULL,'last_activity' => '2022-02-26 17:51:54','created_at' => '2022-02-18 02:22:40','updated_at' => '2022-03-03 09:26:02')
        );
        foreach ($data as $item){
            \App\Models\User::create($item);
        }
    }
}
