<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RelatedProduct extends Model
{
    use HasFactory;
    protected $guarded = ['id'];
    public function mainProduct()
    {
        return $this->belongsTo(Product::class, 'product_id', 'id');
    }
      public function relatedProductt()
    {
        return $this->belongsTo(Product::class, 'related_product_id', 'id');
    }

}
