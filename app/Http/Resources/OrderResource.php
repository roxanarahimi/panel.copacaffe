<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param \Illuminate\Http\Request $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        switch ($this->status) {

            case 'progress':
                $status = 'در حال پردازش';
                $percent = '40';
                $color = 'bg-warning';
                break;
            case 'cart':
                $status = 'سبد خرید';
                $percent = '20';
                $color = 'bg-dark';
                break;
            case 'ready':
                $status = 'آماده ارسال';
                $percent = '60';
                $color = 'bg-info';
                break;
            case 'sent':
                $status = 'ارسال شد';
                $percent = '80';
                $color = 'bg-primary';
                break;
            case 'delivered':
                $status = 'دریافت شد';
                $percent = '100';
                $color = 'bg-success';
                break;
            case 'canceled':
                $status = 'لغو شد';
                $percent = '100';
                $color = 'bg-danger';
                break;
            default:
                $status = 'نامعلوم';
                $percent = '10';
                $color = 'bg-secondary';
                break;

        }
        switch ($this->payment) {
            case 'not payed':
                $payment = 'پرداخت نشده';
                break;
            case 'payed':
                $payment = 'پرداخت شد';
                break;
            default:
                $payment = '?';
                break;
        }

        switch ($this->user->gender) {
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

        return [
            "id" => (string)$this->id,
            "user_id" => $this->user_id,
//            "client" => new ClientResource($this->client),
            "user" => [
                "id" => (string)$this->user->id,
                "name" => $this->user->name,
                "email" => $this->user->email,
                "mobile" => $this->user->mobile,
                "gender" => $gender,
                "avatar" => $this->user->avatar,
                "addresses" => $this->user->addresses,
//                "cart" => new OrderResource($this->client->cart),
                "cart" => [
                    "id" => 11,
                    "user_id" => 2,
                    "code" => null,
                    "amount" => $this->user->cart->amount,
                    "payment" => $this->user->cart->payment,
                    "status" => $this->user->cart->status,
                    "items" => $this->user->cart->items,
                    "user_address_id" => $this->user->cart->user_address_id,
                    "created_at" => $this->user->cart->created_at,
                    "updated_at" => $this->user->cart->created_at,
                ],
//        rderResource($this->user->cart),
                "allOrders" => $this->user->allOrders,
                "orders" => $this->user->orders,
                "addresses" => $this->user->addresses,
                "created_at" => date('Y-m-d', strtotime($this->user->created_at)),
                "updated_at" => date('Y-m-d', strtotime($this->user->updated_at)),
            ],
            "code" => $this->code,
            "amount" => $this->amount,
            "address" => $this->address,
            "payment" => $payment,
            "status" => $status,
            "percent" => $percent,

            "items" => OrderItemResource::collection($this->items),
            "color" => $color,
            "post_track_id" => $this->post_track_id,
            "created_at" => date('Y-m-d', strtotime($this->created_at)),
            "updated_at" => date('Y-m-d', strtotime($this->updated_at)),

        ];
    }
}
