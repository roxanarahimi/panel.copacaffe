<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $thumb = $this->image ? str_replace('.jpg','_thumb.jpg',$this->image) : '';

        return [
            "id" => (string)$this->id,
            "image" => $this->image,
            "thumb" => $thumb,
            "title" => $this->title,
            "sub_title" => $this->sub_title,
            "text" => $this->text,
            "active" => $this->active,
            "created_at" => date('Y-m-d', strtotime($this->created_at)),
            "updated_at" => date('Y-m-d', strtotime($this->updated_at)),
        ];
    }
}
