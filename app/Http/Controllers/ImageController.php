<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mockery\Exception;

class ImageController extends Controller
{
    public function uploadImage($base64_str, $name, $folderPath)
    {
        //base64_encode($base64_str);
        //base64_decode($base64_str);

        $image_parts = explode(";base64,", $base64_str);
//        $image_type_aux = explode("image/", $image_parts[0]);
//        $image_type = $image_type_aux[1];
        $image_base64 = base64_decode($image_parts[1]);
//        $file = $folderPath . $name . '.' . $image_type;

        file_put_contents($folderPath . $name, $image_base64);
        $file = $folderPath . $name;
        return $file;


    }

    public function uploadEditorImage(Request $request)
    {

//        return $request;
        $image_parts = explode(";base64,", $request['code']);
        $image_base64 = base64_decode($image_parts[1]);
        $name = str_replace('.jpg', uniqid() . '.jpg', $request['name']);
        file_put_contents($request['path'] . $name, $image_base64);
        $file = '/' . $request['path'] . $name;
//        $this->resizeImage($request['path'],$name);
        return response($file, 200);

    }

    function resizeImage($path, $name)
    {

        try {
            $image_name = $path . $name;
            $image = imagecreatefrompng($image_name);
            $width = imagesx($image);
            $height = imagesy($image);
            $newWidth = 300;
            $newHeight = $height*$newWidth/$width;
            $imgResized = imagescale($image, $newWidth, $newHeight);
            imagealphablending($imgResized, false);
            $transparency = imagecolorallocatealpha($imgResized, 0, 0, 0, 127);
            imagefill($imgResized, 0, 0, $transparency);
            imagesavealpha($imgResized, true);
            $image_name = str_replace('.png', '_thumb.png', $image_name);
            imagepng($imgResized, $image_name);
            $image = imagecreatefrompng($image_name);


        } catch (\Exception $exception) {
            return $exception;
        }
    }


}
