<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $thumb = $this->image ? str_replace('.png','_thumb.png', $this->image) : '';

        return [
            "id" => (string)$this->id,
            "title" => $this->title,
            "title_en" => $this->title_en,
            "image" => $this->image,
            "thumb" => $thumb,
            "active" => (boolean)$this->active,
            "products" => ProductResource::collection($this->products),
            "subsets" => ProductResource::collection($this->products),
            "created_at" => date('Y-m-d', strtotime($this->created_at)),
            "updated_at" => date('Y-m-d', strtotime($this->updated_at)),
        ];
    }
}
