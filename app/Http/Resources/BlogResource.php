<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BlogResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $thumb = $this->image ? str_replace('.png','_thumb.png', $this->image) : '';
        return [
            "id" => (string)$this->id,
            "image" => $this->image,
            "thumb" => $thumb,
            "title" => $this->title,
            "active" => (boolean)$this->active,
            "text" => $this->text,

//            "product" => new ProductResource($this->product),
//            "product"=> $this->product,
            "category" => [
                'id' => $this->category->id,
                'title' => $this->category->title,
                'active' => $this->category->active,
            ],
//            "tag" => [
//                'id' => $this->tag->id,
//                'title' => $this->tag->title,
//                'active' => $this->tag->active
//            ],
//            "article_tag_id" => $this->article_tag_id,
            "views" => $this->views,
            "likes" => $this->likes,
            "dislikes" => $this->dislikes,
            "created_at" => date('Y-m-d', strtotime($this->created_at)),
            "updated_at" => date('Y-m-d', strtotime($this->updated_at)),

        ];
    }
}
