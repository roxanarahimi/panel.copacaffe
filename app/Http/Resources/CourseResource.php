<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CourseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return[
            "id" => (string)$this->id,
            "title" => $this->title,

            "category" => [
                'id' => $this->category->id,
                'title' => $this->category->title,
                'active' => $this->category->active,
            ],
            "teacher" => [
                'id' => $this->teacher->id,
                'name' => $this->teacher->name,
                'gender' => $this->teacher->gender,
                'active' => $this->teacher->active,
            ],
            "price" => $this->price,
            "off" => $this->off,
            "capacity" => $this->capacity,
            "description" => $this->description,
            "active" => (boolean)$this->active,
            "start" => date('Y-m-d', strtotime($this->start)),
            "end" => date('Y-m-d', strtotime($this->end)),
            "time" => $this->time,


            "created_at" => date('Y-m-d', strtotime($this->created_at)),
            "updated_at" => date('Y-m-d', strtotime($this->updated_at)),


        ];
    }
}
