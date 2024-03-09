<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        switch ($this->gender) {
            case 'female':
            {
                $gender = 'خانم';
                break;
            }
            case 'male':
            {
                $gender = 'آقا';
                break;
            }
            default:
            {
                $gender = 'نامعلوم';
                break;
            }
        }

        $allOrders = [];
        foreach ($this->allOrders as $item) {
            array_push($allOrders, new OrderResource($item));
        }
        $orders = [];
        foreach ($this->orders as $item) {
            array_push($orders, new OrderResource($item));
        }

        if ($this->cart)
        {
            if ($this->cart->items){
                $count = count($this->cart->items);

            }else{
                $count = 0;
            }
            $cart = [
                "id" => (string)$this->cart->id,
                "user_id" => $this->id,
                "code" => null,
                "amount" => $this->cart->amount,
                "payment" => $this->cart->payment,
                "status" => $this->cart->status,
                "items" => $this->cart->items,
                "user_address_id" => $this->user_address_id,
                "created_at" => $this->cart->created_at,
                "updated_at" => $this->cart->created_at,
            ];
        }else{
            $cart = null;
            $count = 0;

        }


        return [
            "id" => (string)$this->id,
            "name" => $this->name,
            "email" => $this->email,
            "last_activity_at" => $this->last_activity,

             "mobile" => $this->mobile,
            "gender" => $gender,
            "avatar" => $this->avatar,
            "cart" => $cart ,
            "cart-items-count" => $count,

            "scope" => $this->scope,
            "orders" => $orders,
            "allOrders" => $allOrders,
//            "addresses" =>  UserAddressResource::collection($this->addresses),
            "addresses" =>  $this->addresses,

//            "expires_at" => $exp,

            "created_at" => date('Y-m-d', strtotime($this->created_at)),
            "updated_at" => date('Y-m-d', strtotime($this->updated_at)),
        ];
    }
}
