<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
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
        $relatedProducts =[] ;
        if($this->relatedProducts){
            foreach ($this->relatedProducts as $item){
                $item->relatedProductt->value = $item->relatedProductt->id;
                $thumb2 = $item->relatedProductt->image ? str_replace('.png','_thumb.png', $item->relatedProductt->image) : '';
                $item->relatedProductt->thumb = $thumb2;
                $relatedProducts[] = $item->relatedProductt;
            }
        }
        return [
            "id" => (string)$this->id,
            "image" => $this->image,
            "thumb" => $thumb,
            "title" => $this->title,
            "title_en" => $this->title_en,
            "subTitle_en" => $this->subTitle_en,
            "products_en" => $this->products_en,
            "stock" => $this->stock,
            "active" => (boolean)$this->active,
            "ingredients" => $this->ingredients,
            "text" => $this->text,

//            "product" => new ProductResource($this->product),
            "related_products" => $relatedProducts,

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
