<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $thumb1 = $this->image1 ? str_replace('.png','_thumb.png', $this->image1) : '';
        $thumb2 = $this->image2 ? str_replace('.png','_thumb.png', $this->image2) : '';
        return [
            "id" => (string)$this->id,
            "value" => (string)$this->id,
            "index" => $this->index,
            "product_category_id" => $this->product_category_id,
            "image1" => $this->image1,
            "thumb1" => $thumb1,
            "image2" => $this->image2,
            "thumb2" => $thumb2,
            "title" => $this->title,
            "subTitle" => $this->subTitle,
//            "link" => $this->link,
            "stock" => $this->stock,
            "active" => (boolean)$this->active,
            "text" => $this->text,
            "category" => [
                'id' => $this->category->id,
                'title' => $this->category->title,
                'active' => $this->category->active,
            ],
//            "features" => $this->features,
            "price" => $this->price,
            "off" => $this->off,
            "view" => $this->view,
            "score" => $this->score,
            "score_count" => $this->score_count,
            "created_at" => date('Y-m-d', strtotime($this->created_at)),
            "updated_at" => date('Y-m-d', strtotime($this->updated_at)),
        ];
    }
}
