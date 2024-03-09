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
        $relatedProducts =[] ;
        if($this->relatedProducts){
            foreach ($this->relatedProducts as $item){
                $item->relatedProductt->value = $item->relatedProductt->id;
                $thumb2 = $item->relatedProductt->image ? str_replace('.png','_thumb.png', $item->relatedProductt->image) : '';
                $item->relatedProductt->thumb = $thumb2;
                $relatedProducts[] = $item->relatedProductt;
            }
        }
        $thumb = $this->image ? str_replace('.png','_thumb.png', $this->image) : '';
        return [
            "id" => (string)$this->id,
            "value" => (string)$this->id,
            "index" => $this->index,
            "product_category_id" => $this->product_category_id,
            "image" => $this->image,
            "thumb" => $thumb,
            "title" => $this->title,
            "title_en" => $this->title_en,
            "subTitle" => $this->subTitle,
            "flavor" => $this->flavor,
            "flavor_en" => $this->flavor_en,
            "ingredients" => $this->ingredients,
            "link" => $this->link,
            "stock" => $this->stock,
            "active" => (boolean)$this->active,
            "text" => $this->text,
            "category" => [
                'id' => $this->category->id,
                'title' => $this->category->title,
                'active' => $this->category->active,
            ],
            "related_products" => $relatedProducts,
            "color" => $this->color,
            "features" => $this->features,
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
